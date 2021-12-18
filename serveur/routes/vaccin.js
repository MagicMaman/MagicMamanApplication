const express = require('express')
const router = express.Router()

const vaccinController = require('../contollers/vaccin')

router.get('/', vaccinController.index)
router.post('/show', vaccinController.show )
router.post('/update', vaccinController.update )
router.post('/store', vaccinController.store )
router.post('/destory', vaccinController.destory )


module.exports = router 
 