const express = require('express')
const router = express.Router()

const solideController = require('../contollers/solide')

router.get('/', solideController.index)
router.post('/show', solideController.show )
router.post('/update', solideController.update )
router.post('/store', solideController.store )
router.post('/destory', solideController.destory )


module.exports = router 
 