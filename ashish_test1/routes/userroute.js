var router = require('express').Router()

var usercontroller =require('../controllers/usercontroller')
var ordercontroller =require('../controllers/ordercontroller')

router.post('/adduser',usercontroller.add_user)
router.get('/showuser',usercontroller.show_user)

router.post('/addorder',ordercontroller.add_order)
router.get('/showorder',ordercontroller.show_order)

module.exports=router