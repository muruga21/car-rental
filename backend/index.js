const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')  

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(5000,()=>{
    console.log("server running on port 5000");
})

app.use('/users',userRoutes)

app.get('/hello',(req, res)=>{
    res.status(200).json({message: "hello world"})
    return
})