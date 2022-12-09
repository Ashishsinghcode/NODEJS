const router = require('express').Router()

var userController = require('../controllers/userController')

// User API
router.post('/adduser',userController.addUser)
router.post('/listuser',userController.listUser)
//end USer API
module.exports=router