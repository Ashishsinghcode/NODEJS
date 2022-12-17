const Cart = require('../Models/cartModel')

function addcart(req,res){
    var validators=''
     if(req.body == null || req.body.item_name == undefined || req.body.item_name == ''){
        validators = "Item Name required \n"
    }if(req.body == null || req.body.price_per_item == undefined || req.body.price_per_item == ''){
        validators += "Price_per_item required \n"
    }if(req.body == null || req.body.quantity == undefined || req.body.quantity == ''){
        validators += "Quantity is required \n"
    }if(req.body == null || req.body.user_email == undefined || req.body.user_email == ''){
        validators += "User Email is required \n"
    }
    if(!!validators){
        res.json({
            'status':500,
            'success':false,
            'message':validators
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
    let datalimit = 2;
    let skipvalue = 0;
    if(req.body.skipvalue != undefined){
        skipvalue = datalimit*req.body.skipvalue
    }
    Cart.find(req.body)
    
    .sort({'_id':-1})
    .limit(datalimit)
    .skip(skipvalue)
    .exec()
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