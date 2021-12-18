const express = require('express')
const router = express.Router()

const poidsController = require('../contollers/poids')

router.get('/', poidsController.index)
router.post('/show', poidsController.show )
router.post('/update', poidsController.update )
router.post('/store', poidsController.store )
router.post('/destory', poidsController.destory )



module.exports = router 
