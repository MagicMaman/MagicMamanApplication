const { response } = require('express')
const  poids = require('../models/poids')

//show the list of poidss
const index = (req, res, next)=> {
poids.find()
.then(response =>{
    res.json({
        response
    })
})
.catch(error =>{
    res.json({
        message: 'Error Occured!'
    })
})
}
//show single poids
const show = (req, res, next) =>{
    let poidsID = req.body.poidsID
    poids.findById(poidsID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'Error Occured!'
        })
    })
}

//Update poids
const update = (req, res, next) => {
    let poidsID = req.body.poidsID

    let updatedData = {
        time: req.body.time,
        poids: req.body.poids,
        notes: req.body.notes   
     }
     poids.findByIdAndUpdate(poidsID, {$set: updatedData})
     .then(() =>{
         res.json({
             message: 'User Updated Successfully!'
         })
     })
     .catch(error => {
        res.json({
          message:'Error Occured!'  
        })
    })
}
//c bon 
const store = (req, res, next) => {

    let poids = new poids({
        
        time: req.body.time,
        poids: req.body.poids,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
    })
    poids.save()
        .then(response => {
            res.json({
                message: 'poids Added Sucessfull!',
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
//delete an poids c bon 

const destory = (req, res, next) => {
    let poidsID = req.body.poidsID
    poids.findByIdAndRemove(poidsID)
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




