const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teteSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    /*type:{
        type: String,
        required : true
    },*/
    /*quantity:{
        type: String,
        required: true
    },*/
    notes:{
        type: String,
        required: true
    }
    


})

const tete = mongoose.model("tete",teteSchema)
module.exports = tete