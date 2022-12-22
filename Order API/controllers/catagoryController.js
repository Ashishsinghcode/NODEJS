const Catagory = require('../models/categoryModel')


function addCatagory(req,res){
    let validators=''
    if(req.body == null || req.body.catagory_name == undefined || req.body.catagory_name == '' ){
       validators += 'Catagory name required'
        
    }
   
    else {

        Catagory.findOne({catagory_name:req.body.catagory_name}).exec()

        .then((data)=>{
            if(data == null){
                let catagoryObj = new Catagory
                catagoryObj.catagory_name=req.body.catagory_name
                catagoryObj.save()
                
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'Catagory Added successfully'
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
module.exports={
    addCatagory
}