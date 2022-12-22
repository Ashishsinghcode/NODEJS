 const Order = require('../models/orderModel')
 const cartmod = require('../models/cartModel')

 function addOrder(req,res){
     

    if(req.body.shipping_address == undefined ||  req.body.shipping_address == '' ) {
         res.json({
             'status':500,
             'success':false,
             'message':'Invalid shipping_address'
         })
     }else if(req.body.shipping_contact == undefined || req.body.shipping_address == ''){
         res.json({
             'status':500,
             'success':false,
             'message':'Invalid shipping_contact'
         })
     }else if(req.body.email == undefined || req.body.email == ''){
         res.json({
             'status':500,
             'success':false,
             'message':'Invalid user_email'
         })
     }else{
         cartmod.find({email:req.body.email}).exec()
         .then((cartObj)=>{
             if(cartObj == null){
                 res.json({
                     'status':422,
                     'success':false,
                     'message':'No items in the cart'
                 })  
             }else{
                 let total=0
                 let orderObj = new Order
                 cartObj.forEach(function(item){
                     total += item.sub_total
                     orderObj.order_items.push({
                         'product_name':item.product_name,
                         'price':item.price,
                         'quantity':item.quantity,
                         'sub_total':item.sub_total,
                     })
                 })
                
                 var grand_total=total
                 console.log(grand_total)
                 orderObj.email=req.body.email
                 orderObj.shipping_address=req.body.shipping_address
                 orderObj.shipping_contact=req.body.shipping_contact
                 orderObj.grand_total=grand_total
                 orderObj.save()
            
             res.json({
                 'status':200,
                 'success':true,
                 'message':'Order Placed Successfully'
             })
             }
         })


     }
 }
 function viewOrder(req, res){
     Order.find(req.body).exec()
     .then(orderObj=>{
         if(orderObj != null){
             res.json({
                 'status':200,
                 'success':true,
                 'message':'Data Loaded',
                 'data':orderObj
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
     addOrder,
     viewOrder
 }