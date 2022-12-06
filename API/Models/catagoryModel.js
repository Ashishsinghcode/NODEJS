const mongo = require('mongoose')

const catagorySchema = mongo.Schema({
    'catagory_name': {type:String, default:'' },
    'products': {type:String, default:'' },
    'stock': {type:String, default:'' },
    
})
module.exports= mongo.model('catagory',catagorySchema)