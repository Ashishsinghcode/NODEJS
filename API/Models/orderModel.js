const mongo = require('mongoose')

const orderSchema = mongo.Schema({
    'product_name': {type:String, required:true },
    'price': {type:Number, required:true},
    'quantity': {type:Number, required:true},
    'user_name': {type:String, required:true},
    'shipping_address': {type:String, required:true },
    'shipping_contact': {type:Number, required:true },
    'tax': {type:Number, required:true },
    'grand_total': {type:Number, required:true },
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('order',orderSchema)