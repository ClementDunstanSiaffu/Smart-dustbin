
const mongoose = require('mongoose');

const addLocation = mongoose.Schema({
    name:{
        type:String
    }
})

mongoose.model('LOCATION',addLocation)