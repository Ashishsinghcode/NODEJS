 const Cart = require('../models/cartModel')
 const User = require('../models/userModel')
 const Product = require('../models/productModel')

 //const Product = require('../models/productModel')
 function addcart(req,res){
     var validators=''
      if(req.body == null || req.body.product_name == undefined || req.body.product_name == ''){
         validators = "Product Name required \n"
     }if(req.body == null || req.body.price == undefined || req.body.price_per_item == ''){
         validators += "Price_per_item required \n"
     }if(req.body == null || req.body.quantity == undefined || req.body.quantity == ''){
         validators += "Quantity is required \n"
     }if(req.body == null || req.body.email == undefined || req.body.email == ''){
         validators += "User Email is required \n"
     }
     if(!!validators){
         res.json({
             'status':500,
             'success':false,
             'message':validators
         })
     }else{
        
        User.findOne({'email':req.body.email}).exec()
        .then(userdata=>{
            if(userdata == null){
                res.json({
                    'status':200,
                    'success':false,
                    'message':'User not exist'
                })
            }else{
                Product.findOne({'product_name':req.body.product_name}).exec()
                .then(productdata=>{
                 if(productdata != null){
                    let cartObj = new Cart()
                    let sub_total=req.body.price*req.body.quantity
                     cartObj.product_name=req.body.product_name
                     cartObj.price=req.body.price
                     cartObj.quantity=req.body.quantity
                     cartObj.email=req.body.email
                     cartObj.sub_total=sub_total
                     cartObj.save()
                     res.json({
                         'status':200,
                         'success':true,
                         'message':'Added to cart'
                     })
                 }else{
                     res.json({
                         'status':200,
                         'success':false,
                         'message':'Product not exist'
                     })
                 }
                })
                .catch(err=>{
                    res.json({
                        'status':500,
                        'success':false,
                        'message':'Error on product'+String(err)
                    })
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':'Error on User'+String(err)
            })
        })
         }
     }
 function viewCart(req, res){
    User.findOne({'email':req.body.email}).exec()
    .then(userdata=>{
        if(userdata == null){
            res.json({
                'status':200,
                'success':false,
                'Message':'user not exist'
            })
        }else{
            Cart.find(req.body).exec()
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