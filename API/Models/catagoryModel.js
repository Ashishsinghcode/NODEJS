const mongo = require('mongoose')

const catagorySchema = mongo.Schema({
    'catagory_name': {type:String, required:true },
    'products': {type:String, required:true },
    'stock': {type:String, required:true },
    'isBlocked':{ type:Boolean, default:false},
    'isStatus':{ type:Boolean, default:true },
    'created_at':{ type:Date, default:Date.now()}
    
})
module.exports= mongo.model('catagory',catagorySchema)