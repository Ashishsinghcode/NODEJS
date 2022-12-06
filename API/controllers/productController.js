const product = require('../Models/productModel')

function addProduct(req,res){
    let productObj = new product
    productObj.product_name=req.body.product_name
    productObj.price=req.body.price
    productObj.descrption=req.body.descrption
    productObj.quantity=req.body.quantity
    productObj.save()
    res.json({
        'status':200,
        'success':true,
        'message':'Product added',
    })
}

module.exports={
    addProduct
}