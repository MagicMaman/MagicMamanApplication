const medicament = require('../models/medicament')
//c bon 
const index = (req, res, next) => {
    medicament.find()
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
    medicament.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your medicament :",
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

    let medicament = new medicament({
        
        Name: req.body.Name,
        time: req.body.time,
        quantity: req.body.quantity,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
    })
    medicament.save()
        .then(response => {
            res.json({
                message: 'medicament Added Sucessfull!',
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


//update an medicament c bon
const update = (req, res, next) => {
    let medicamentID = req.body.medicamentID
    let updateData = {
        Name: req.body.Name,
        time: req.body.time,
        quantity: req.body.quantity,
        notes: req.body.notes
    }
    medicament.findByIdAndUpdate(medicamentID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'medicament updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an medicament c bon 

const destory = (req, res, next) => {
    let medicamentID = req.body.medicamentID
    medicament.findByIdAndRemove(medicamentID)
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