var router = require('express').Router()

var registeruser = require('../controllers/registerUser')
var product_ordered = require('../controllers/product_controller')
router.post('/register',registeruser.register_user)
router.get('/showuser',registeruser.show_user)
router.post('/addorder',product_ordered.add_order)
router.get('/showorder',product_ordered.show_order)


module.exports =router