const mongo = require('mongoose')

const orderSchema = mongo.Schema({
    'order_items':[{
        'product_name':{type:String},
        'price':{type:Number},
        'quantity':{type:Number},
        
    }],
   
    'email': {type:String},
    'shipping_address': {type:String },
    'shipping_contact': {type:Number },
    'grand_total':{type:Number, default:0},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
})
module.exports= mongo.model('placedorder',orderSchema)