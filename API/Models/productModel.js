const mongo = require('mongoose')

const productSchema ={
    'product_name':{ type:String, default:''},
    'price':{ type:Number, default:0},
    'description':{ type:String, default:''},
    'quantity':{ type:Number, default:0},
}
module.exports= mongo.model('product', productSchema)