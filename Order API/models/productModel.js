const mongo = require('mongoose')

const productSchema ={
    'catagory_id':{type:mongo.Schema.Types.ObjectId, ref:'catagory', default:''},
    'sno':{type:Number,default:1},
    'product_name':{ type:String},
    'catagory_name':{type:String},
    'price':{ type:Number},
    'description':{ type:String},
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
}
module.exports= mongo.model('product', productSchema)