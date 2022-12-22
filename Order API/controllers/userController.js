const User = require('../models/userModel')
const Customer = require('../models/customerModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt= require('jsonwebtoken')
const privatekey= "Ashish@123"



function register(req,res){
let validators=''
    if(req.body == null || req.body.first_name == undefined || req.body.first_name == ''){
        validators += 'first name  is reqired '
    }
    if(req.body == null || req.body.last_name == undefined || req.body.last_name == ''){
        validators += 'last name  is reqired '
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
                userObj.first_name=req.body.first_name,
                userObj.last_name=req.body.last_name,
                userObj.email=req.body.email,
                userObj.password=bcrypt.hashSync(req.body.password, saltRounds)
                userObj.save()
                .then(async userdata=>{
                    var customercount = await Customer.countDocuments().exec()
                    let customerObj = Customer()
                    customerObj.sno= customercount+1,
                    customerObj.first_name=req.body.first_name
                    customerObj.last_name=req.body.last_name
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


function login(req,res){
    User.findOne({'email':req.body.email}).exec()
    .then(userdata=>{
        if(userdata == null){
            res.json({
                'status':200,
                'success':false,
                'message':'User not found'
            })
        }else{
            console.log(userdata)
            if(bcrypt.compareSync(req.body.password,userdata.password))
            {
                const payload ={
                    'id':userdata._id,
                    'email':userdata.email
                }
                const token = jwt.sign(payload,privatekey,{expiresIn:60*2})
                res.json({
                    'status':200,
                    'success':true,
                    'message':'Login Successfully',
                    'token':token
                })    
            }else{
                res.json({
                    'status':200,
                    'success':false,
                    'message':'Invalid Login credential'
                })
            }
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
module.exports={
    register,
    listcustomer,
    login
    
}