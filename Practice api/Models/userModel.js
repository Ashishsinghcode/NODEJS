const mongo = require('mongoose')



const userSchema = mongo.Schema({
    'first_name' :{type:String, required:true},
    'last_name' :{type:String, required:true},
    'email' :{type:String, required:true},
    'password' :{type:String, required:true},
    'contact' :{type:Number, required:true},

})

module.exports = mongo.model('userdata', userSchema)