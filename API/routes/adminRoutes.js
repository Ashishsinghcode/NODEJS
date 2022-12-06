const router = require('express').Router()

var productcontroller = require('../controllers/productController')
var userController =require('../controllers/userController')
var orderController=require('../controllers/orderController')
var catagoryController=require('../controllers/catagoryController')


// Sample API
//router.post('/addcatagory',catagorycontroller.addCatagory)
//router.get('/listcatagory',catagorycontroller.listCatagory)
// End Sample API

//product API start
router.post('/addproduct',productcontroller.addProduct)
//product API end

//UserAPI start
router.post('/adduser',userController.addUser)
//USer API End

//catagory API start
router.post('/addcatagory',catagoryController.addCatagory)
//catagory API end

//order API start
router.post('/addorder',orderController.addOrder)
//order API end
module.exports = router