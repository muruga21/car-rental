const jwt = require('jsonwebtoken')

const checkUser = async(req, res, next) =>{
    try{
        const token = req.cookies.token;
        console.log(token);
        const decoded = jwt.decode(token);
        if(decoded?.userType === 'user'){
            next();
        }
        else{
            return res.status(401).json({error:true, message:"not a valid user"});
        }
    }
    catch(err){
        return res.status(400).json({error:true, message:err.message});
    }
}

module.exports = {checkUser}