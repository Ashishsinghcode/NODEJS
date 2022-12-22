const mongo = require('mongoose')

const userSchema = mongo.Schema({
    'first_name':{type:String, default:''},
    'last_name':{type:String, default:''},
    'email':{type:String, default:''},
    'password':{type:String, default:''},
    'created_at':{type:Date, default:Date.now()},
    'is_blocked':{type:String, default:false},
    
})

module.exports= mongo.model('user',userSchema)