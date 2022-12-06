const User =require('../Models/userModel')

function addUser(req,res){
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
        'message':'Product Inserted',
        
    })
}
module.exports={
    addUser
}