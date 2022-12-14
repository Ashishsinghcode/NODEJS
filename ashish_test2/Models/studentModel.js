const mongo = require('mongoose')

const studentSchema = mongo.Schema({
   'student_name':{type:String},
   'class':{type:String},
   'roll_no':{type:Number},
   'section':{type:String},
   'dob':{type:String},
   'father_name':{type:String},
   'mother_name':{type:String},
   'created_at':{type:Date, default:Date.now()},
   'status':{type:Boolean, default:true}
   
})

module.exports = mongo.model('student', studentSchema)