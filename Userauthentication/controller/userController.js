const User = require('../model/userModel')
const Customer = require('../model/customerModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
function register(req,res){
let validators=''
    if(req.body == null || req.body.name == undefined || req.body.name == ''){
        validators += 'name  is reqired '
    }
    if(req.body == null || req.body.email == undefined || req.body.email == ''){
        validators += 'email  is reqired '
    }
    if(req.body == null || req.body.password == undefined || req.body.password == ''){
        validators += 'password  is reqired '
    }
    if(req.body == null || req.body.contact == undefined || req.body.contact == ''){
        validators += 'contact  is reqired '
    }
    if(req.body == null || req.body.address == undefined || req.body.address == ''){
        validators += 'address  is reqired '
    }
    if(!!validators){
        res.json({
            'status':422,
            'success':false,
            'message':validators
        })
    }else{
        User.findOne({'email':req.body.email}).exec()
        .then(user=>{
            if(user != null){
                res.json({
                    'status':200,
                    'success':false,
                    'message':'User Already exists'
                })
            }else{
                let userObj = new User()
                userObj.name=req.body.name,
                userObj.email=req.body.email,
                userObj.password=bcrypt.hashSync(req.body.password, saltRounds)+9
                userObj.save()
                .then(async userdata=>{
                    var customercount = await Customer.countDocuments().exec()
                    let customerObj = Customer()
                    customerObj.sno= customercount+1,
                    customerObj.customer_name=req.body.name
                    customerObj.email=req.body.email
                    customerObj.password=req.body.password
                    customerObj.address=req.body.address
                    customerObj.contact=req.body.contact
                    customerObj.user_id=userdata._id
                    customerObj.save()
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'user registerd successfully'
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':500,
                        'success':false,
                        'message':String(err),
                        'data':'error on customer data'
                    })
                })

            }
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':String(err),
                'data':'error on user data'
            })
        })
    }
}


function listcustomer(req,res){
    Customer.findOne(req.body).populate('user_id').exec()
    .then(data=>{
        if(data != null){
            console.log(data)
            res.json({
                'status':200,
                'success':true,
                'data':data.email,
            })
        
        }else{
            res.json({
                'status':200,
                'success':true,
                'message':'No user found',
                
            })
        }
    })
    .catch(err=>{
    res.json({
                    'status':500,
                    'success':false,
                    'message':String(err),
                    'data':'error on user data'
                })
    })
}
module.exports={
    register,
    listcustomer
    
}