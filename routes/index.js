
const mongoose = require('mongoose');
const Volume = mongoose.model("VOLUME");


exports.receiveVolume = (req,res)=>{
    const {volume,location} = req.params;
   
   
    const volume1 = new Volume();
    volume1.volume = volume;
    volume1.location = location;
    volume1.save((err,doc)=>{
        if(!err){
           res.send("data has been sent")
        }else{
            console.log("error")
        }
    })
}

exports.getVolume = (req,res)=>{
    
    Volume.find((err,docs)=>{
        if(!err){
            console.log(docs)
            res.json(docs)
        }else{
            console.log("error")
        }
    })
}