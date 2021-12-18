const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tailleSchema = new mongoose.Schema({
    baby:{
        type: Schema.Types.ObjectId,
        ref: "baby",
        required: true
    },
    time:{
        type: String,
        required: true
    },
    taille:{
        type: String,
        required : true
    },
    notes:{
        type: String,
        required: true
    }
    


})

const taille = mongoose.model("taille",tailleSchema)
module.exports = taille