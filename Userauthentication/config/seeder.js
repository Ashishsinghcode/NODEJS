const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.insertadmin=()=>{
    User.findOne({'email':'admin@gmail.com'}).exec()
    .then(data=>{
        if(data == null){
            let adminObj = User()
            adminObj.email='admin@gmail.com'
            adminObj.name='Admin'
            adminObj.password=bcrypt.hashSync('admin@123',saltRounds)
            adminObj.save()
            console.log('Admin registerd successfully')
        }else{
            console.log('Admin already registered')

        }
    })
    .catch(err=>{
    })
}