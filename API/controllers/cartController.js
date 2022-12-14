const Cart = require('../Models/cartModel')

function addcart(req,res){
    if(req.body == null || req.body.product_name == undefined){
        res.json({
            'status':500 ,
            'success':false,
            'message':'Invalid product_name'
        })
    }else if(req.body == null || req.body.price == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid price'
        })
    }else if(req.body == null || req.body.quantity == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid quantity'
        })
    } else if(req.body == null || req.body.user_name == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid User Name'
        })
    }else{
        let sub_total=req.body.price*req.body.quantity
        let cartObj = Cart()
        cartObj.product_name=req.body.product_name
        cartObj.price=req.body.price
        cartObj.quantity=req.body.quantity
        cartObj.user_name=req.body.user_name
        cartObj.sub_total=sub_total
        cartObj.save()
        res.json({
            'status':200,
            'success':true,
            'message':'Added to cart'
        })
    }
}
module.exports={
    addcart
}