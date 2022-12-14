const Order = require('../Models/orderModel')
const Cart = require('../Models/cartModel')

function addOrder(req,res){
    console.log(req.body)

   if(req.body.shipping_address == undefined ) {
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid shipping_address'
        })
    }else if(req.body.shipping_contact == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid shipping_contact'
        })
    }else if(req.body.user_email == undefined || req.body.user_email == ''){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid user_email'
        })
    }else{
        Cart.find({user_email:req.body.user_email}).exec()
        .then((cartObj)=>{
            if(cartObj == null){
                res.json({
                    'status':422,
                    'success':false,
                    'message':'No items in the cart'
                })  
            }else{
                var total =0
                let orderObj = new Order
                cartObj.forEach(function(item){
                    total += item.sub_total
                    orderObj.order_items.push({
                        'item_name':item.item_name,
                        'price_per_item':item.price_per_item,
                        'quantity':item.quantity,
                        'sub_total':item.sub_total,
                    })
                })
                
                var grand_total=total
                orderObj.user_email=req.body.user_email
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