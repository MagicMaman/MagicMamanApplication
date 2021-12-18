const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bibronSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    type:{
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

const bibron = mongoose.model("bibron",bibronSchema)
module.exports = bibron