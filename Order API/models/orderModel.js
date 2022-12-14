const mongo = require('mongoose')

const orderSchema = mongo.Schema({
    'order_items':[{
        'item_name':{type:String},
        'price_per_item':{type:Number},
        'quantity':{type:Number},
        'sub_total':{type:Number}
    }],
   
    'user_email': {type:String},
    'shipping_address': {type:String },
    'shipping_contact': {type:Number },
    'grand_total': {type:Number},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('placedorder',orderSchema)