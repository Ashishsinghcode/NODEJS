const Order = require('../Models/orderModel')
const Cart = require('../Models/cartModel')

function addOrder(req,res){
   if(req.body == null || req.body.shipping_address == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid shipping_address'
        })
    }else if(req.body == null || req.body.shipping_contact == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid shipping_contact'
        })
    }else if(req.body == null || req.body.tax == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid tax'
        })
    }
    else{
        Cart.find({user_name:req.body.user_name}).exec()
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
                    orderObj.order_item.push({
                        'product_name':item.product_name,
                        'price':item.price,
                        'quantity':item.quantity,
                        'sub_total':item.sub_total,
                    })
                })
                var tax= req.body.tax/100*total;
                var grand_total=total+tax
                orderObj.user_name=req.body.user_name
                orderObj.shipping_address=req.body.shipping_address
                orderObj.shipping_contact=req.body.shipping_contact
                orderObj.tax=req.body.tax
                orderObj.grand_total=grand_total
                orderObj.save()
            console.log(total)
            res.json({
                'status':200,
                'success':true,
                'message':'data loaded'
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
                'message':'User Loaded',
                'data':orderObj
            })
        }else{
            res.json({
                'status':200,
                'success':true,
                'message':'User Loaded',
                'data':[]
            })
        }
    })
    .catch(err=>{
        res.json({
            'status':500,
            'success':false,
            'message':'Server Error',
            'data':err
        }) 
    })
}

function addmoreorder(req,res){
    Order.findOne({user_name:req.body.user_name}).exec()
    .then((moreorder)=>{
        if(moreorder == null){
            res.json({
                'status':422,
                'success':false,
                'message':'user_name required'
            })
        }else{
            moreorder.order_item.sub_total
            orderObj.order_item.push({
                'product_name':req.body.product_name,
                'price':req.body.price,
                'quantity':req.body.quantity,
                'sub_total':sub_total,
            })
        }
    })
}
module.exports={
    addOrder,
    viewOrder,
    addmoreorder
}