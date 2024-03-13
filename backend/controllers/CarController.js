const {carDetailModel} = require('../models/carDetailSchema')

const getCar = async(req, res)=>{
    const carid = req.params.carid;
    console.log(carid)
    if(carid == "" || carid == undefined){
        return res.status(400).json({error:true, message:"invalid Car id"})
    }
    try{
        const doc = await carDetailModel.findOne({_id:carid});
        if(doc === null){
            return res.status(402).json({error:true, message:"car detail not found"});
        }
        return res.status(200).json({error:false, message:doc})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:true, message:err.message})
    }
}

module.exports = {getCar}