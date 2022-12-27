const Gallary = require('../models/gallaryModel')

function addgallary(req,res){
    let gallaryobj = new Gallary()
    gallaryobj.title = req.body.title
    gallaryarray = []

    
    if(req.files){
        g= req.files
        g.forEach(element => {
            console.log(element)
            gallaryarray.push('/gallary'+element.filename)
        });
        gallaryobj.gallery = gallaryarray
    }
    gallaryobj.save()
    res.json({
        'status':200,
        'success':true,
        'message':'Gallary Inserted'
    })
}
module.exports={
    addgallary
}