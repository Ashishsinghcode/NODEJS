const product = require('../Models/productModel')

function addProduct(req,res){
    if(req.body == null || req.body.product_name == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid product_name',
        })
    }else if(req.body == null || req.body.price == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid price',
        })
    }else if(req.body == null || req.body.description == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid descrption',
        })
    }else if(req.body == null || req.body.quantity == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid quantity',
        })
    }else{

        product.findOne({product_name:req.body.product_name}).exec()
        .then((data)=>{
            if(data == null){
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

            }else{
                res.json({
                    'status':200,
                    'success':false,
                    'message':'Product Already exists',
                })
            }
        })
        .catch((err)=>{
            res.json({
                'status':500,
                'success':false,
                'message':String(err),
            })
        })

    } 
}
function viewProduct(req, res){
    product.find(req.body).exec()
    .then(productObj=>{
        if(productObj != null){
            res.json({
                'status':200,
                'success':true,
                'message':'User Loaded',
                'data':productObj
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
    addProduct,
    viewProduct
}