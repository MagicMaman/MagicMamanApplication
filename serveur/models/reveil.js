
//a faire 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reveilSchema = new mongoose.Schema({
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

const reveil = mongoose.model("reveil",reveilSchema)
module.exports = reveil