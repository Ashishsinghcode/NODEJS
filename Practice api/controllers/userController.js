const User = require('../Models/userModel')

function addUser(req,res){
    if(req.body == null || req.body.first_name == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid first_name'
        })
    }else   if(req.body == null || req.body.last_name == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid last_name'
        })
    }else   if(req.body == null || req.body.email == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid email'
        })
    }else   if(req.body == null || req.body.password == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid password'
        })
    }else   if(req.body == null || req.body.contact == undefined){
        res.json({
            'status':500,
            'success':false,
            'message':'Invalid contact'
        })
    }else{

        let userObj = User()
        userObj.first_name=req.body.first_name,
        userObj.last_name=req.body.last_name,
        userObj.email=req.body.email,
        userObj.password=req.body.password,
        userObj.contact=req.body.contact
        userObj.save()
        res.json({
            'status':200,
            'success':true,
            'message':'User Registered'
        })
    } 
}
function listUser(req,res){
User.find(req.body).exec()
.then(userObj=>{
    if(userObj != null){
       res.json({
        'status':200,
        'success':true,
        'data':userObj
       })

    }else {
        res.json({
            'status':200,
            'success':true,
            'data':[]
           })
    }
})


}
module.exports={
    addUser,
    listUser
}