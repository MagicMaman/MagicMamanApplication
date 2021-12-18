const express = require('express')
const router = express.Router()

const babyController = require('../contollers/baby')
//const upload = require('../middelware/upload')

router.get('/', babyController.index)
router.post('/show', babyController.show )
router.post('/update', babyController.update )
router.post('/store', /*upload.single('image'),*/ babyController.store )
router.post('/destory', babyController.destory )


module.exports = router 
 
