const { response } = require('express')
const  taille = require('../models/taille')

//show the list of tailles
const index = (req, res, next)=> {
taille.find()
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
//show single taille
const show = (req, res, next) =>{
    let tailleID = req.body.tailleID
    taille.findById(tailleID)
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

//Update taille
const update = (req, res, next) => {
    let tailleID = req.body.tailleID

    let updatedData = {
        time: req.body.time,
        taille: req.body.taille,
        notes: req.body.notes   
     }
     taille.findByIdAndUpdate(tailleID, {$set: updatedData})
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

    let taille = new taille({
        
        time: req.body.time,
        taille: req.body.taille,
        notes: req.body.notes,
        baby: req.body.baby//baby reference  
    })
    taille.save()
        .then(response => {
            res.json({
                message: 'taille Added Sucessfull!',
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
//delete an taille c bon 

const destory = (req, res, next) => {
    let tailleID = req.body.tailleID
    taille.findByIdAndRemove(tailleID)
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




