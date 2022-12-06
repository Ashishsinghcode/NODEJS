const order = require('../Models//orderModel')

function addOrder(req,res){
    let orderObj = new order
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

module.exports={
    addOrder
}