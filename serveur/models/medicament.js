const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medicamentSchema = new mongoose.Schema({
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
    quantity:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    }
})

const medicament = mongoose.model("medicament",medicamentSchema)
module.exports = medicament