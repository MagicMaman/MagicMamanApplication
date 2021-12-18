const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poidsSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    poids:{
        type: String,
        required : true
    },
    notes:{
        type: String,
        required: true
    }
    


})

const poids = mongoose.model("poids",poidsSchema)
module.exports = poids