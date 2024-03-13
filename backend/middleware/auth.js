const jwt = require('jsonwebtoken')
const secret = "abcdefg";

const generateToken = async(userName, userType) =>{
    try{
        const payload = {userName: userName, userType: userType};
        const accessToken = jwt.sign(payload,secret,{expiresIn: "7D"});
        console.log(accessToken)
        const decode = jwt.decode(accessToken, secret);
        console.log(decode)
        return accessToken;
    }
    catch(err){
        console.log(err.message);
        return "";
    }
}

module.exports = {generateToken}

