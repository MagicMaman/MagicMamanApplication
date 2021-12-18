const express = require('express')
const router = express.Router()

const teteController = require('../contollers/tete')

router.get('/', teteController.index)
router.post('/show', teteController.show )
router.post('/update', teteController.update )
router.post('/store', teteController.store )
router.post('/destory', teteController.destory )


module.exports = router 
