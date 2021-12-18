const { response } = require('express')
const baby = require('../models/baby')
//c bon 
const index = (req, res, next) => {
    baby.find()
        .then(response => {
            res.status(200).json({
                response
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "ERROR Occured!!",
                error,
                status:"failed"
                
            })
        })
}
// c bon
const show = (req, res) => {
    let id = req.body.id
    baby.findOne({
        id
    })
        .then(response => {
            res.json({
                message: "This is your baby :",
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured',
                error
            })
        })
}

//c bon 
const store = (req, res, next) => {

    let Baby = new baby({

        name: req.body.name,
        image: req.body.image,
        birthday: req.body.birthday,
        gender: req.body.gender,
        user: req.body.user//user reference 

    })
    // if(req.file){
    //     Baby.image = req.file.path


    // }
    Baby.save()
        .then(response => {
            res.json({
                message: 'baby Added Sucessfull!',
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//update an baby c bon
const update = (req, res, next) => {
    let babyID = req.body.babyID
    let updateData = {
        image: req.body.image,
        name: req.body.name,
        gender: req.body.gender,
        birthday: req.body.birthday
    }
    baby.findByIdAndUpdate(babyID, {
        $set: updateData
    })
        .then(() => {
            res.json({
                message: 'baby updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an baby c bon 

const destory = (req, res, next) => {
    let babyID = req.body.babyID
    baby.findByIdAndRemove(babyID)
        .then(() => {
            res.json({
                message: 'Delete successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destory

}