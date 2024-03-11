const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')  
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(5000,()=>{
    console.log("server running on port 5000");
})

try{
    const connect = async() =>{
        await mongoose.connect("mongodb+srv://Kishore:bk_sensei@mern.d6qyuyj.mongodb.net/?retryWrites=true&w=majority&appName=Mern").then(()=>{console.log("muruga")})
        console.log("hello world")   
    }
    connect();
}
catch(err){
    console.log(err.message)
}

app.use('/users',userRoutes)

app.get('/hello',(req, res)=>{
    res.status(200).json({message: "hello world"})
    return
})