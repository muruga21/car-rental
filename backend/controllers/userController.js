//import schema

//model - schema
// view
//c controller - functions


const login = (req, res) =>{
    //check if user in db
    //res user not found

    // check pass match
    // res pass not match

    //res logedin
    console.log("kishore")
    res.status(200).json({message: "working"})
}

module.exports = {login}