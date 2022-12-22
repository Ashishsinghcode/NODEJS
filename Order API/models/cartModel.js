const mongo = require('mongoose')

const cartSchema = mongo.Schema({
    'product_name':{type:String},
    'price':{type:Number},
    'sub_total':{type:Number},
    'quantity':{type:Number},
    'email':{type:String},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('cart',cartSchema)