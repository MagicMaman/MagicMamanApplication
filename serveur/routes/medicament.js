const express = require('express')
const router = express.Router()

const medicamentController = require('../contollers/medicament')

router.get('/', medicamentController.index)
router.post('/show', medicamentController.show )
router.post('/update', medicamentController.update )
router.post('/store', medicamentController.store )
router.post('/destory', medicamentController.destory )


module.exports = router 
 