const express = require('express')
const router = express.Router()

const reveilController = require('../contollers/reveil')

router.get('/', reveilController.index)
router.post('/show', reveilController.show )
router.post('/update', reveilController.update )
router.post('/store', reveilController.store )
router.post('/destory', reveilController.destory )


module.exports = router 
 