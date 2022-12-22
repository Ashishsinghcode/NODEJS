const router = require('express').Router()

var catagoryController=require('../controllers/catagoryController')
var orderController=require('../controllers/orderController')
var cartController=require('../controllers/cartController')
var productController=require('../controllers/productController')
let usercontroller = require('../controllers/userController')

//User API start
router.post('/addcustomer', usercontroller.register)
router.post('/listcustomer', usercontroller.listcustomer)
router.post('/login', usercontroller.login)
//USer API end
//Catagory API
router.post('/addcatagory',catagoryController.addCatagory)
//router.post('/viewcatagory',catagoryController.viewCatagory)
//ENd Catagory API


//product API
router.post('/addproduct',productController.addProduct)
router.post('/viewproduct',productController.viewProduct)

//end product API
//order API start
router.post('/placeorder',orderController.addOrder)
router.post('/vieworder',orderController.viewOrder)
router.post('/addtocart',cartController.addcart)
router.post('/viewcart',cartController.viewCart)
//order API end



//ERROR PAGE
router.all("**",function(req,res){
    res.json({
        'status':404,
        'success':false,
        'message':'Page not found'
    })
})
//END ERROR PAGE
module.exports = router