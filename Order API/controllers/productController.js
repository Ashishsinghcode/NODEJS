const Product = require('../models/productModel')
const Catagory = require('../models/categoryModel')

function addProduct(req,res){
    if(req.body == null || req.body.product_name == undefined || req.body.product_name == '' ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid product_name',
        })
    }else if(req.body == null || req.body.price == undefined || req.body.price == '' ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid price',
        })
    }else if(req.body == null || req.body.description == undefined || req.body.description == ''  ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid descrption',
        })
    }else if(req.body == null || req.body.quantity == undefined || req.body.quantity == '' ){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid quantity',
        })
    }else{

        Catagory.findOne({'catagory_name':req.body.catagory_name}).exec()
        .then(catagorydata=>{
            if(catagorydata != null){
                    Product.findOne({'product_name':req.body.product_name}).exec()
                    .then((data)=>{
                    if(data == null){
                        let productObj = new Product
                        productObj.catagory_id=catagorydata._id
                        productObj.catagory_name=catagorydata.catagory_name
                        productObj.product_name=req.body.product_name
                        productObj.price=req.body.price
                        productObj.description=req.body.description
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
                            'message':'product already exist',
                        })
                    }
                })
                .catch(err=>{
                    res.json({
                        'status':500,
                        'success':false,
                        'message':'error at product'+String(err),
                    })  
                })
                }else{
                    res.json({
                        'status':200,
                        'success':false,
                        'message':'Catagory not exists',
                    })
                }

                })
            
        
        .catch((err)=>{
            res.json({
                'status':500,
                'success':false,
                'message':'error at catagory data'+String(err),
            })
        })

    } 
}
function viewProduct(req, res){
    Product.find(req.body).populate('catagory_id').exec()
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
            'data':String(err)
        }) 
    })
}
module.exports={
    addProduct,
    viewProduct
}