const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')  
const adminRoutes = require('./routes/adminRoutes')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
const saltRounds = 10;

app.listen(5000,()=>{
    console.log("server running on port 5000");
})

try{
    const connect = async() =>{
        await mongoose.connect("mongodb+srv://Kishore:bk_sensei@mern.d6qyuyj.mongodb.net/?retryWrites=true&w=majority&appName=Mern")
        console.log("db connected")   
    }
    connect();
}
catch(err){
    console.log(err.message)
}

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://yourfrontenddomain.com');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });

app.use('/users',userRoutes)
app.use('/admin',adminRoutes)

// app.get('/hello',async (req, res)=>{
//     res.cookie("muruga","abcdefghijklmn")
//     return res.status(200).json({error:false, message:"hello world"})
// })