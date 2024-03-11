//import schema

//model - schema
// view
//c controller - functions


const login = async (req, res) => {
    try{
        const userName = req.body.Name;

        const Pass = req.body.Password;

        if(userName && Pass){
            const user = userModel.find({userName})

            if(!user){
                res.status
            }
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

module.exports = {login}