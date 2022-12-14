const mongo = require('mongoose')

const orderSchema = mongo.Schema({
    'order_item':[{
        'product_name':{type:String},
        'price':{type:Number},
        'quantity':{type:Number},
        'sub_total':{type:Number}
    }],
    'price': {type:Number},
    'quantity': {type:Number},
    'user_name': {type:String},
    'shipping_address': {type:String },
    'shipping_contact': {type:Number },
    'tax': {type:Number },
    'grand_total': {type:Number},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('order',orderSchema)