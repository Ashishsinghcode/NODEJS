const Order = require('../Models//orderModel')

function addOrder(req,res){
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
    }else if(req.body == null || req.body.user_name == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid user_name'
        })
    }else if(req.body == null || req.body.shipping_address == undefined){
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
    }else if(req.body == null || req.body.grand_total == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid grand_total'
        })
    }else{
        let orderObj = new Order
        orderObj.product_name=req.body.catagory_name
        orderObj.price=req.body.price
        orderObj.quantity=req.body.quantity
        orderObj.user_name=req.body.user_name
        orderObj.shipping_address=req.body.shipping_address
        orderObj.shipping_contact=req.body.shipping_contact
        orderObj.tax=req.body.tax
        orderObj.grand_total=req.body.grand_total
        orderObj.save()
        res.json({
            'status':200,
            'success':true,
            'message':'Order Placed'
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
module.exports={
    addOrder,
    viewOrder
}