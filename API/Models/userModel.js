const mongo = require('mongoose')

const userSchema = mongo.Schema({
    'first_name': {type:String},
    'last_name': {type:String },
    'email': {type:String },
    'password': {type:String },
    'address': {type:String },
    'contact': {type:Number },
    'created_at':{type:Date, default:Date.now()},
    'isBlocked':{type:Boolean, default:false},
    'isStatus':{type:Boolean, default:true}
})
module.exports= mongo.model('user',userSchema)