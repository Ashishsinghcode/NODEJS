const mongo = require('mongoose')

const userSchema = mongo.Schema({
    'first_name': {type:String, default:'' },
    'last_name': {type:String, default:'' },
    'email': {type:String, default:'' },
    'password': {type:String, default:'' },
    'address': {type:String, default:'' },
    'contact': {type:Number, default:0 },
})
module.exports= mongo.model('user',userSchema)