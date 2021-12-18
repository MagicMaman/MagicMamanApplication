const bibron = require('../models/bibron')
//c bon 
const index = (req, res, next) => {
    bibron.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                error
            })
        })
}
// c bon
const show = (req, res) => {
    let id = req.body.id
    bibron.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your bibron :",
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

    let bibron = new bibron({
        
        time: req.body.time,
        type: req.body.type,
        quantity: req.body.quantity,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
        

    })
    bibron.save()
        .then(response => {
            res.json({
                message: 'bibron Added Sucessfull!',
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


//update an bibron c bon
const update = (req, res, next) => {
    let bibronID = req.body.bibronID
    let updateData = {
        time: req.body.time,
        type: req.body.type,
        quantity: req.body.quantity,
        notes: req.body.notes 
    }
    bibron.findByIdAndUpdate(bibronID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'bibron updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an bibron c bon 

const destory = (req, res, next) => {
    let bibronID = req.body.bibronID
    bibron.findByIdAndRemove(bibronID)
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