const mongo = require("mongoose")

const galleryschema = mongo.Schema({
    'title' : { type:String, default:'' },
    'gallery' : [{ type:String, default:'no-image.png' }],
    'isBlocked' : { type:Boolean,default:false},
    'created_at' : { type:Date,default:Date.now()}
})

module.exports = mongo.model('gallery',galleryschema)