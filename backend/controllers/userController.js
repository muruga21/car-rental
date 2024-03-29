const bcrypt = require('bcrypt');
const { userModel } = require('../models/userSchema');
const { response } = require('express');
const { carDetailModel } = require('../models/carDetailSchema');
const { generateToken } = require('../utils/Token');


//import schema

//model - schema
// view
//c controller - functions
const saltRounds = 10;

const login = async (req, res) => {
    console.log("check")
    try{
        const userName = req.body.Name;
        const passWord = req.body.Password;
        console.log(userName,passWord)
        if(userName!="" && passWord!=""){
            const user = await userModel.findOne({userName:userName})
             console.log(user)
            if(!user){
              return  res.status(500).json({error:true,message:"User Not Found"})
            }
            
            const passwordMatch =  await bcrypt.compare(passWord,user.password);
            console.log(passwordMatch)
            if(passwordMatch){
               const authToken = await generateToken(userName,"user");
               if(authToken === ""){
                return res.status(400).json({error:true, message:"auth token not generated"});
               }
               res.cookie("token", authToken);
               return res.status(200).json({error:false,message:authToken})
            }
            else{
                return res.status(500).json({error:true,message:"Password not Matching"})
            }
        }
        else{
            return res.status(500).json({error:true,message:"Enter UserName and PassWord"})
        }

        
    }
    catch(e){
        return res.status(404).json({error:true,message:e.message})

    }
    //check if user in db
    //res user not found

    // check pass match
    // res pass not match

    //res logedin
}

const signup = async(req, res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    if(userName == "" || password == ""){
        return res.status(400).json({error: true, message:"invalid credentials"})
    }
    try{
        const response = await userModel.findOne({userName:userName});
        if(response){
            return res.status(401).json({error: true, message:"User Name already exists"});
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);

        try{
            //create update upsert true
            const doc = await userModel.create({userName: userName, password: hashPassword})
            if(doc){
                return res.status(200).json({error:false, message:"user created successfully"});
            }
        }
        catch(err){
            console.log(err.message)
            return res.status(400).json({error:true, message: err.message})
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(404).json({error:true, message: err.message})
    }
}


const displayCars =async (req,res)=>{
    try
    {const response = await carDetailModel.find({});
    if(!response ){
        return res.status(404).json({error:true,message:"No Cars Found"})
    }
    return res.status(200).json({error:false,message:response});}
    catch(err){
        return res.status(500).json({error:true,message:err.message})
    }

}

const filterCars =async (req,res)=>{
    //location
    const dist = req.body.location
    console.log("check");
    console.log(dist)
   
    if(dist ==="" || dist===undefined){
        return res.status(500).json({error:true,message:"Invalid Location"})
    }

    const response = await carDetailModel.find({location: dist})
    {console.log(response)}

    if(!response){
      return res.status(500).json({error:true,message:response})
    }
    else{
        return res.status(200).json({error:false,response:response})
    }

}

const updateCars = async(req, res)=>{
    const carid = req.body.carid;
    console.log("check")
    if(carid === "" || carid === undefined) {
        return res.status(401).json({error:true, message:"unknown car id"});

    };
    try{
        console.log(carid)
        const doc = await carDetailModel.updateOne({_id: carid}, {$set :{isAvailable: false}});
        return res.status(200).json({error:false, message:doc})
    }
    catch(err){
        return res.status(401).json({error:true, message:err.message});
    }
}


module.exports = {login, signup,displayCars,filterCars,updateCars}