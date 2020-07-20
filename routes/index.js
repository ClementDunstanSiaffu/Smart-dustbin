
const mongoose = require('mongoose');
const Volume = mongoose.model("VOLUME");
const Location = mongoose.model('LOCATION')

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



exports.pokea = (req,res)=>{
    
    const location = new Location();
    console.log(req.body.location)
    location.name = req.body.location;
    location.save((err,docs)=>{
        if(!err){
            res.redirect('https://smart-dustbin.vercel.app/')
        }else{
            res.send('there is an error')
        }
    })
}

exports.ondoa = async (req,res)=>{
    const location = req.body.location
    const item = await Location.findOne({name:`${location}`})
    console.log(item)
    await Location.deleteOne(item)
    res.redirect('https://smart-dustbin.vercel.app/')
  
    
}

exports.pata = (req,res)=>{
    Location.find((err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            console.log('there is an error')
        }
    })
}