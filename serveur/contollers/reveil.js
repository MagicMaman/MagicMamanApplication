const reveil = require('../models/reveil')
//c bon 
const index = (req, res, next) => {
    reveil.find()
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
    reveil.findOne({
            id
        })
        .then(response => {
            res.json({
                message:"This is your reveil :",
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

    let reveil = new reveil({
        
        time: req.body.time,
        notes: req.body.notes,
        baby: req.body.baby//baby reference 

    })
    reveil.save()
        .then(response => {
            res.json({
                message: 'reveil Added Sucessfull!',
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


//update an reveil c bon
const update = (req, res, next) => {
    let reveilID = req.body.reveilID
    let updateData = {
        time: req.body.time,
        notes: req.body.notes
    }
    reveil.findByIdAndUpdate(reveilID, {
            $set: updateData
        })
        .then(() => {
            res.json({
                message: 'reveil updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!',
                error
            })
        })
}


//delete an reveil c bon 

const destory = (req, res, next) => {
    let reveilID = req.body.reveilID
    reveil.findByIdAndRemove(reveilID)
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