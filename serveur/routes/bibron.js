const express = require('express')
const router = express.Router()

const bibronController = require('../contollers/bibron')

router.get('/', bibronController.index)
router.post('/show', bibronController.show )
router.post('/update', bibronController.update )
router.post('/store', bibronController.store )
router.post('/destory', bibronController.destory )


module.exports = router 
 