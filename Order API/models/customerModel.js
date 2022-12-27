const mongo = require('mongoose')

const customerSchema = mongo.Schema({
    'user_id':{type:mongo.Schema.Types.ObjectId, ref:'user', default:''},
    'sno':{type:Number, default:1},
    'first_name':{type:String, default:''},
    'last_name':{type:String, default:''},
    'email':{type:String, default:''},
    'profile_pic':{type:String, default:'profile.jpg'},

    'password':{type:String, default:''},
    'address':{type:String, default:''},
    'contact':{type:Number, default:0},
    'created_at':{type:Date, default:Date.now()},
    'is_blocked':{type:String, default:false},
    
})

module.exports= mongo.model('customer',customerSchema)