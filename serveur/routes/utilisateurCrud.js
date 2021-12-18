const express = require('express')
const router = express.Router()

const userController = require('../contollers/user')

router.get('/', userController.index)
router.post('/show', userController.show )
router.post('/update', userController.update )
router.post('/store', userController.store )
router.post('/destory', userController.destory )



module.exports = router 
