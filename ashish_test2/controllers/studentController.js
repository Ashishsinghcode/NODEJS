const Student = require('../Models/studentModel')


function addStudent(req,res){
if( req.body== null || req.body.student_name == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid Student Name'
    })
}else if( req.body== null || req.body.class == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid class'
    })
}else if( req.body== null || req.body.roll_no == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid roll_no'
    })
}else if( req.body== null || req.body.section == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid section'
    })
}else if( req.body== null || req.body.dob == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid dob'
    })
}else if( req.body== null || req.body.father_name == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid father_name'
    })
}else if( req.body== null || req.body.mother_name == undefined){
    res.json({
        'status':500,
        'success':false,
        'messsage':'Invalid mother_name'
    })
}else{
    let studentObj = Student()
    studentObj.student_name = req.body.student_name,
    studentObj.class = req.body.class,
    studentObj.roll_no = req.body.roll_no,
    studentObj.section = req.body.section,
    studentObj.dob = req.body.dob,
    studentObj.father_name = req.body.father_name,
    studentObj.mother_name = req.body.mother_name,
    studentObj.save()
    res.json({
        'status':200,
        'success':true,
        'messsage':'Student Registered '
    })
}

}

function listStudent(req,res){
    Student.find(req.body).exec()
    .then((studentObj)=>{
        if(studentObj != null ){
            res.json({
            'status':200,
            'success':true,
            'data':studentObj
            })
            

        }else{
            res.json({
                'status':200,
                'success':true,
                'data':[]
                }) 
        }
    
    })
    .catch((err)=>{
        res.json({
            'status':500,
            'success':false,
            'data':"Server Error"
            }) 
    })
}
function listoneStudent(req,res){
    Student.findOne({_id : req.body._id}).exec()
    .then((studentObj)=>{
        if(studentObj != null && req.body._id != undefined ){
            res.json({
            'status':200,
            'success':true,
            'data':studentObj
            })
            

        }else{
            res.json({
                'status':200,
                'success':true,
                'data':[]
                }) 
        }
    
    })
    .catch((err)=>{
        res.json({
            'status':500,
            'success':false,
            'data':"Server Error"
            }) 
    })
}


module.exports ={
    addStudent,
    listStudent,
    listoneStudent
}