const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vaccinSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required : true
    },
    notes:{
        type: String,
        required: true
    }
    


})

const vaccin = mongoose.model("vaccin",vaccinSchema)
module.exports = vaccin