const mongo =require('mongoose')

mongo.connect('mongodb://localhost:27017/practice')
.then((res)=>{
    console.log('Connection Established')
})
.catch((err)=>{
    console.log('Connection not established')
})