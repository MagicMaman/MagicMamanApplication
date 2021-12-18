const solide = require('../models/solide')
//c bon 
const index = (req, res, next) => {
    solide.find()
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
    solide.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your solide :",
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

    let solide = new solide({
        
        Name: req.body.Name,
        time: req.body.time,
        quantity: req.body.quantity,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 
    })
    solide.save()
        .then(response => {
            res.json({
                message: 'solide Added Sucessfull!',
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


//update an solide c bon
const update = (req, res, next) => {
    let solideID = req.body.solideID
    let updateData = {
        Name: req.body.Name,
        time: req.body.time,
        quantity: req.body.quantity,
        notes: req.body.notes
    }
    solide.findByIdAndUpdate(solideID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'solide updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an solide c bon 

const destory = (req, res, next) => {
    let solideID = req.body.solideID
    solide.findByIdAndRemove(solideID)
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