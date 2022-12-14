const mongo = require('mongoose')

const cartSchema = mongo.Schema({
    'product_name':{type:String},
    'price':{type:Number},
    'quantity':{type:Number},
    'sub_total':{type:Number},
    'user_name':{type:String},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('ordercart',cartSchema)