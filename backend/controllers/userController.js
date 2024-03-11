const bcrypt = require('bcrypt');
const { userModel } = require('../models/userSchema');
//import schema

//model - schema
// view
//c controller - functions
const saltRounds = 10;

const login = async (req, res) => {
    try{
        const userName = req.body.Name;

        const passWord = req.body.Password;

        if(userName && Pass){
            const user = userModel.find({userName})

            if(!user){
                res.status(500).json({error:true,message:"User Not Found"})
            }

            const passwordMatch = await bcrypt.compare(passWord, user.password);

            if(passwordMatch)
        }

        
    }
    //check if user in db
    //res user not found

    // check pass match
    // res pass not match

    //res logedin
    console.log("kishore")
    res.status(200).json({message: "working"})
}

const signup = async(req, res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    try{
        const response = await userModel.findOne({userName:userName});
        if(response){
            return res.status(401).json({error: true, message:"User Name already exists"});
        }

        const hashPassword = await bcrypt.hash(password, saltRounds);

        try{
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
        return res.status(400).json({error:true, message: err.message})
    }
}

module.exports = {login, signup}