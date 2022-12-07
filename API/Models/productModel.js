const mongo = require('mongoose')

const productSchema ={
    'product_name':{ type:String, required:true},
    'price':{ type:Number, required:true},
    'description':{ type:String, required:true},
    'quantity':{ type:Number, required:true},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
}
module.exports= mongo.model('product', productSchema)