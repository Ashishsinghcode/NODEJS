const router = require('express').Router()

var productcontroller = require('../controllers/productController')
var userController =require('../controllers/userController')
var orderController=require('../controllers/orderController')
var catagoryController=require('../controllers/catagoryController')
var cartController=require('../controllers/cartController')


// Sample API
//router.post('/addcatagory',catagorycontroller.addCatagory)
//router.get('/listcatagory',catagorycontroller.listCatagory)
// End Sample API

//product API start
router.post('/addproduct',productcontroller.addProduct)
router.post('/viewproduct',productcontroller.viewProduct)
//product API end

//UserAPI start
router.post('/adduser',userController.addUser)
router.post('/viewuser',userController.viewUser)
router.post('/viewbyid',userController.viewoneUser)
//USer API End

//catagory API start
router.post('/addcatagory',catagoryController.addCatagory)
router.post('/viewcatagory',catagoryController.viewCatagory)
//catagory API end

//order API start
router.post('/addorder',orderController.addOrder)
router.post('/vieworder',orderController.viewOrder)
router.post('/moreorder',orderController.addmoreorder)
router.post('/addtocart',cartController.addcart)
//order API end
module.exports = router