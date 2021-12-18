
//a faire 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const endormissementSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    }
    


})

const endormissement = mongoose.model("endormissement",endormissementSchema)
module.exports = endormissement