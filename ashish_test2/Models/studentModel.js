const mongo = require('mongoose')

const studentSchema = mongo.Schema({
   'student_name':{type:String, required:true},
   'class':{type:String, required:true},
   'roll_no':{type:Number, required:true},
   'section':{type:String, required:true},
   'dob':{type:String, required:true},
   'father_name':{type:String, required:true},
   'mother_name':{type:String, required:true},
   'created_at':{type:Date, default:Date.now()},
   'status':{type:Boolean, default:true}
   
})

module.exports = mongo.model('student', studentSchema)