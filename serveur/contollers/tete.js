const { response } = require('express')
const  tete = require('../models/tete')

//show the list of tetes
const index = (req, res, next)=> {
tete.find()
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
//show single tete
const show = (req, res, next) =>{
    let teteID = req.body.teteID
    tete.findById(teteID)
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

//Update tete
const update = (req, res, next) => {
    let teteID = req.body.teteID

    let updatedData = {
        time: req.body.time,
        //type: req.body.type,
        //quantity: req.body.quantity,
        notes: req.body.notes   
     }
     tete.findByIdAndUpdate(teteID, {$set: updatedData})
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

    let tete = new tete({
        
        time: req.body.time,
        //type: req.body.type,
        //quantity: req.body.quantity,
        notes: req.body.notes,
        baby: req.body.baby//baby reference  
    })
    tete.save()
        .then(response => {
            res.json({
                message: 'tete Added Sucessfull!',
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
//delete an tete c bon 

const destory = (req, res, next) => {
    let teteID = req.body.teteID
    tete.findByIdAndRemove(teteID)
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




