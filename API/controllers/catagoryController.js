const catagory = require('../Models/catagoryModel')

function addCatagory(req,res){
    let catagoryObj = new catagory
    catagoryObj.catagory_name=req.body.catagory_name
    catagoryObj.products=req.body.products
    catagoryObj.stock=req.body.stock
    catagoryObj.save()
    res.json({
        'status':200,
        'success':true,
        'message':'Catagory added'
    })
}

module.exports={
    addCatagory
}