const mongoose = require('mongoose')
const Schema = mongoose.Schema

const temperatureSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    temperature:{
        type: String,
        required : true
    },
    notes:{
        type: String,
        required: true
    }
    


})

const temperature = mongoose.model("temperature",temperatureSchema)
module.exports = temperature