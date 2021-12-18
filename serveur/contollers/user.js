const { response } = require('express')
const  user = require('../models/user')

//show the list of users
const index = (req, res, next)=> {
user.find()
.then(response =>{
    res.json({
        response
    })
})
.catch(error =>{
    res.json({
        message: 'Error Occured!',
        error
    })
})
}
//show single user
const show = (req, res, next) =>{
    let userID = req.body.userID
    user.findById(userID)
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

//Update User
const update = (req, res, next) => {
    let userID = req.body.userID

    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password   
     }
     user.findByIdAndUpdate(userID, {$set: updatedData})
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

    let User = new user({
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password  
    })
    User.save()
        .then(response => {
            res.json({
                message: 'user Added Sucessfull!',
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
//delete an user c bon 

const destory = (req, res, next) => {
    let userID = req.body.userID
    user.findByIdAndRemove(userID)
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




