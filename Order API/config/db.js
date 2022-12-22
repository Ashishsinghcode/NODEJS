const mongo = require('mongoose')

mongo.connect("mongodb://localhost:27017/test4")
.then((res)=>{
    console.log("Connection established")
})
.catch((err)=>{

    console.log("connection not established")
})