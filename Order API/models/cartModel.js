const mongo = require('mongoose')

const cartSchema = mongo.Schema({
    'item_name':{type:String},
    'price_per_item':{type:Number},
    'quantity':{type:Number},
    'sub_total':{type:Number},
    'user_email':{type:String},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('cart',cartSchema)