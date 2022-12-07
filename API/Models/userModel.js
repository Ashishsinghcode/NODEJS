const mongo = require('mongoose')

const userSchema = mongo.Schema({
    'first_name': {type:String,required:true},
    'last_name': {type:String,required:true },
    'email': {type:String,required:true },
    'password': {type:String,required:true },
    'address': {type:String,required:true },
    'contact': {type:Number,required:true },
    'created_at':{type:Date, default:Date.now()},
    'isBlocked':{type:Boolean, default:false},
    'isStatus':{type:Boolean, default:true}
})
module.exports= mongo.model('user',userSchema)