const mongo = require('mongoose')

const orderSchema = mongo.Schema({
    'product_name': {type:String, default:'' },
    'price': {type:Number, default:0 },
    'quantity': {type:Number, default:0 },
    'user_name': {type:String, default:'' },
    'shipping_address': {type:String, default:'' },
    'shipping_contact': {type:Number, default:0 },
    'tax': {type:Number, default:0 },
    'grand_total': {type:Number, default:0 },
})
module.exports= mongo.model('order',orderSchema)