const Catagory = require('../Models/catagoryModel')

function addCatagory(req,res){
    if(req.body == null || req.body.catagory_name == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid catagory_name'
        })
    }else if(req.body == null || req.body.products == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid products'
        })
    }else if(req.body == null || req.body.products == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid products'
        })
    }else if(req.body == null || req.body.stock == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid stock'
        })
    }else {

        Catagory.findOne({catagory_name:req.body.catagory_name}).exec()

        .then((data)=>{
            if(data == null){
                let catagoryObj = new Catagory
                catagoryObj.catagory_name=req.body.catagory_name
                catagoryObj.products=req.body.products
                catagoryObj.stock=req.body.stock
                catagoryObj.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'Catagory added'
                })

            }else{
                res.json({
                    'status':200,
                    'success':false,
                    'message':'Catagory already exists'
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
function viewCatagory(req, res){
    Catagory.find(req.body).exec()
    .then(catagoryObj=>{
        if(catagoryObj != null){
            res.json({
                'status':200,
                'success':true,
                'message':'User Loaded',
                'data':catagoryObj
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
    addCatagory,
    viewCatagory
}