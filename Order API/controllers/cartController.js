const Cart = require('../Models/cartModel')

function addcart(req,res){
    if(req.body == null || req.body.item_name == undefined){
        res.json({
            'status':500 ,
            'success':false,
            'message':'Invalid item_name'
        })
    }else if(req.body == null || req.body.price_per_item == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid price_per_item'
        })
    }else if(req.body == null || req.body.quantity == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid quantity'
        })
    } else if(req.body == null || req.body.user_email == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid User Name'
        })
    }else{
        let sub_total=req.body.price_per_item*req.body.quantity
        let cartObj = Cart()
        cartObj.item_name=req.body.item_name
        cartObj.price_per_item=req.body.price_per_item
        cartObj.quantity=req.body.quantity
        cartObj.user_email=req.body.user_email
        cartObj.sub_total=sub_total
        cartObj.save()
        res.json({
            'status':200,
            'success':true,
            'message':'Added to cart'
        })
    }
}
function viewCart(req, res){
    Cart.find({'user_email':req.body.user_email}).exec()
    .then(cartObj=>{
        if(cartObj != null){
            res.json({
                'status':200,
                'success':true,
                'message':'Data Loaded',
                'data':cartObj
            })
        }else{
            res.json({
                'status':200,
                'success':true,
                'message':'Data Loaded',
                'data':[]
            })
        }
    })
    .catch(err=>{
        res.json({
            'status':500,
            'success':false,
            'message':'Server Error',
            'data':String(err)
        }) 
    })
}
module.exports={
    addcart,
    viewCart
}