const express = require('express')
const router = express.Router()

const temperatureController = require('../contollers/temperature')

router.get('/', temperatureController.index)
router.post('/show', temperatureController.show )
router.post('/update', temperatureController.update )
router.post('/store', temperatureController.store )
router.post('/destory', temperatureController.destory )


module.exports = router 
