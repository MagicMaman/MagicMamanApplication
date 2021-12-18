const mongoose = require('mongoose')
const Schema = mongoose.Schema

const babySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    birthday:{
        type: String,
        required: true
    }, 
    gender:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }


})

const baby = mongoose.model("Baby",babySchema)
module.exports = baby