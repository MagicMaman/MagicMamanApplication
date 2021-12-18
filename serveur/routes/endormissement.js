const express = require('express')
const router = express.Router()

const endormissementController = require('../contollers/endormissement')

router.get('/', endormissementController.index)
router.post('/show', endormissementController.show )
router.post('/update', endormissementController.update )
router.post('/store', endormissementController.store )
router.post('/destory', endormissementController.destory )


module.exports = router 
 