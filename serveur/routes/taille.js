const express = require('express')
const router = express.Router()

const tailleController = require('../contollers/taille')

router.get('/', tailleController.index)
router.post('/show', tailleController.show )
router.post('/update', tailleController.update )
router.post('/store', tailleController.store )
router.post('/destory', tailleController.destory )



module.exports = router 
