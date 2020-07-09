
const mongoose = require('mongoose');

const volumeSchema = mongoose.Schema({

    volume:{
        type:Number
    },
    location:{
        type:String
    }
})

mongoose.model("VOLUME",volumeSchema);