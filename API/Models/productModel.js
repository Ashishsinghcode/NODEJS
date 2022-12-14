const mongo = require('mongoose')

const productSchema ={
    'product_name':{ type:String},
    'price':{ type:Number},
    'description':{ type:String},
    'quantity':{ type:Number},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
}
module.exports= mongo.model('product', productSchema)