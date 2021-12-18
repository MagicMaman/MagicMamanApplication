const endormissement = require('../models/endormissement')
//c bon 
const index = (req, res, next) => {
    endormissement.find()
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
    endormissement.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your endormissement :",
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

    let endormissement = new endormissement({
        
        time: req.body.time,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 

    })
    endormissement.save()
        .then(response => {
            res.json({
                message: 'endormissement Added Sucessfull!',
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


//update an endormissement c bon
const update = (req, res, next) => {
    let endormissementID = req.body.endormissementID
    let updateData = {
        time: req.body.time,
        notes: req.body.notes
    }
    endormissement.findByIdAndUpdate(endormissementID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'endormissement updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an endormissement c bon 

const destory = (req, res, next) => {
    let endormissementID = req.body.endormissementID
    endormissement.findByIdAndRemove(endormissementID)
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