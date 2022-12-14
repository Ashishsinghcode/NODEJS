const router = require('express').Router()


var orderController=require('../controllers/orderController')
var cartController=require('../controllers/cartController')


//order API start
router.post('/placeorder',orderController.addOrder)
router.post('/vieworder',orderController.viewOrder)
router.post('/addtocart',cartController.addcart)
router.post('/viewcart',cartController.viewCart)
//order API end
module.exports = router