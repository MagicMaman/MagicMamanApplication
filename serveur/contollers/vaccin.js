const vaccin = require('../models/vaccin')
//c bon 
const index = (req, res, next) => {
    vaccin.find()
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
    vaccin.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your vaccin :",
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

    let vaccin = new vaccin({
        
        Name: req.body.Name,
        time: req.body.time,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
    })
    vaccin.save()
        .then(response => {
            res.json({
                message: 'vaccin Added Sucessfull!',
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


//update an vaccin c bon
const update = (req, res, next) => {
    let vaccinID = req.body.vaccinID
    let updateData = {
        Name:  req.body.Name,
        time:  req.body.time,
        notes: req.body.notes
    }
    vaccin.findByIdAndUpdate(vaccinID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'vaccin updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an vaccin c bon 

const destory = (req, res, next) => {
    let vaccinID = req.body.vaccinID
    vaccin.findByIdAndRemove(vaccinID)
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