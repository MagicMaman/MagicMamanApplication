const { response } = require('express')
const  temperature = require('../models/temperature')

//show the list of temperatures
const index = (req, res, next)=> {
temperature.find()
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
//show single temperature
const show = (req, res, next) =>{
    let temperatureID = req.body.temperatureID
    temperature.findById(temperatureID)
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

//Update temperature
const update = (req, res, next) => {
    let temperatureID = req.body.temperatureID

    let updatedData = {
        time: req.body.time,
        temperature: req.body.temperature,
        notes: req.body.notes   
     }
     temperature.findByIdAndUpdate(temperatureID, {$set: updatedData})
     .then(() =>{
         res.json({
             message: 'temperature Updated Successfully!'
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

    let temperature = new temperature({
        
        time: req.body.time,
        temperature: req.body.temperature,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
    })
    temperature.save()
        .then(response => {
            res.json({
                message: 'temperature Added Sucessfull!',
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
//delete an temperature c bon 

const destory = (req, res, next) => {
    let temperatureID = req.body.temperatureID
    temperature.findByIdAndRemove(temperatureID)
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




