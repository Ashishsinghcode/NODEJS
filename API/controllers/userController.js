const User =require('../Models/userModel')

function addUser(req,res){
    
    if(req.body == null || req.body.first_name == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert first_name',
            
        })

    }else if (req.body == null || req.body.last_name == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert last_name',
            
        })

    }else if(req.body == null || req.body.email == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert email',
            
        })

    }else if(req.body == null || req.body.password == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert password',
            
        })

    }else if(req.body == null || req.body.address == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert address',
            
        })

    }else if(req.body == null || req.body.contact == undefined ){
        res.json({
            'status':500,
            'success':false,
            'message':'Insert contact',
            
        })

    }else {
        
        User.findOne({email:req.body.email}).exec()
        .then((data)=>{
            if(data == null){
                let userObj = new User
                userObj.first_name=req.body.first_name     
                userObj.last_name=req.body.last_name
                userObj.email=req.body.email
                userObj.password=req.body.password
                userObj.address=req.body.address
                userObj.contact=req.body.contact
                userObj.save()    
                res.json({
                    'status':200,
                    'success':true,
                    'message':'User Inserted',
                    
                })

            }else{
                res.json({
                    'status':200,
                    'success':false,
                    'message':'User Already Exist',
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
function viewUser(req, res){
    User.find(req.body).exec()
    .then(userObj=>{
        if(userObj != null){
            res.json({
                'status':200,
                'success':true,
                'message':'User Loaded',
                'data':userObj
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
function viewoneUser(req, res){
    if(req.body != null && req.body._id != undefined){
        User.findOne({_id:req.body._id}).exec()
        .then(userObj=>{
            if(userObj != null){
                res.json({
                    'status':200,
                    'success':true,
                    'message':'User Loaded',
                    'data':userObj
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

    }else {
        res.json({
            'status':500,
            'success':false,
            'message':'_id is required'
        }) 
    }
}



function perdelete(req,res){
    if(req.body._id == undefined){
        res.json({
            'status':422,
            'success':false,
            'message':'_id is required'
        })
    }else{
        User.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            if(data == null){
                res.json({
                    'status':200,
                    'success':true,
                    'message':'User not exist'
                })  
            }else{
                User.deleteOne({'_id':req.body._id}).exec()
                .then(delone=>{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'User Deleted'
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':500,
                        'success':false,
                        'message':String(err)
                    })
                })
            }
        })
        .catch(err=>{
           
                res.json({
                    'status':500,
                    'success':false,
                    'message':String(err)
                })
            
        })
    }
}
function updateuser(req,res){
    if(req.body._id == undefined){
        res.json({
            'status':422,
            'success':false,
            'message':'_id is required'
        })
    }else{
        User.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            if(data == null){
                res.json({
                    'status':200,
                    'success':true,
                    'message':'User not exist'
                })  
            }else{
                data.first_name=req.body.first_name,
                data.last_name=req.body.last_name,
                data.email=req.body.email,
                data.password=req.body.password,
                data.contact=req.body.contact,
                data.save()
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'User Updated'
                    })
            }
        })
        .catch(err=>{
           
                res.json({
                    'status':500,
                    'success':false,
                    'message':String(err)
                })
            
        })
    }
}
function tempdelete(req,res){
    if(req.body._id == undefined){
        res.json({
            'status':422,
            'success':false,
            'message':'_id is required'
        })
    }else{
        User.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            if(data == null){
                res.json({
                    'status':200,
                    'success':true,
                    'message':'User not exist'
                })  
            }else{
                data.isBlocked= req.body.isBlocked
                data.save()
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'User Deleted'
                    })
            }
        })
        .catch(err=>{
           
                res.json({
                    'status':500,
                    'success':false,
                    'message':String(err)
                })
            
        })
    }
}
module.exports={
    addUser,
    viewUser,
    viewoneUser,
    perdelete,
    updateuser,
    tempdelete
}