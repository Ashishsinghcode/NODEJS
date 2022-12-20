const mongo = require('mongoose')

const customerSchema = mongo.Schema({
    'user_id':{type:mongo.Schema.Types.ObjectId, ref:'user', default:''},
    'sno':{type:Number, default:1},
    'customer_name':{type:String, default:''},
    'email':{type:String, default:''},
    'password':{type:String, default:''},
    'address':{type:String, default:''},
    'contact':{type:Number, default:0},
    'created_at':{type:Date, default:Date.now()},
    'is_blocked':{type:String, default:false},
    
})

module.exports= mongo.model('customer',customerSchema)