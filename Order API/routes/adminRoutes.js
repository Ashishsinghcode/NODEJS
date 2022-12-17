const router = require('express').Router()


var orderController=require('../controllers/orderController')
var cartController=require('../controllers/cartController')


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