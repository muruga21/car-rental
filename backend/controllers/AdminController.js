const bcrypt = require('bcrypt');
const { userModel } = require('../models/userSchema');
const { carDetailModel } = require('../models/carDetailSchema');
const saltRounds = 10;


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
            const doc = await userModel.create({userName: userName, password: hashPassword, userType: "admin"})
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
        return res.status(400).json({error:true, message: err.message})
    }
}

const uploadCars = async(req, res) =>{
    const carPicture = req.body.carPicture;
    const carName = req.body.carName;
    const carPrice = req.body.carPrice;
    const isAvailable = true;
    const location = req.body.location;

    if( carPicture === undefined || carName === undefined || carPrice === undefined || isAvailable === undefined || location === undefined){
        return res.status(400).json({error:true, message:"invalid credentials"});
    }

    if( carPicture === "" || carName === "" || carPrice === "" || isAvailable === "" || location === ""){
        return res.status(400).json({error:true, message:"invalid credentials"});
    }

    try{
        const doc = await carDetailModel.create({carPicture, carName, carPrice, isAvailable, location})
        if(doc){
            return res.status(200).json({error:false, message:"car details added"});
        }
        else{
            return res.status(400).json({error:true, message:"unknown err in db"});
        }
    }
    catch(err){
        console.log(err.message);
        return res.status(400).json({error:true, message:err.message});
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
        const doc = await carDetailModel.updateOne({_id: carid}, {$set :{isAvailable: true}});
        return res.status(200).json({error:false, message:doc})
    }
    catch(err){
        return res.status(401).json({error:true, message:err.message});
    }
}

const viewRentedCars = async(req, res)=>{
    console.log(req.cookies);
    try{
        const doc = await carDetailModel.find({isAvailable:false});
        if(doc){
            return res.status(200).json({error:false, message:doc});
        }
    }
    catch(err){
        return res.status(400).json({error:true, message: err.message});
    }
}

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
            //    const authToken = await generateToken(userName, "admin");
            //    if(authToken === ""){
            //     return res.status(400).json({error:true, message:"auth token not generated"});
            //    }
            //    res.cookie("token", authToken);
               return res.status(200).json({error:false,message:"LoginSucessful"})
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


module.exports = {signup, uploadCars, viewRentedCars,updateCars,login}