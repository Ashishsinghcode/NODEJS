const mongo = require('mongoose')

mongo.connect("mongodb+srv://ctclassroom:Ashu7726525@ctclassroom.o37squu.mongodb.net/example?retryWrites=true&w=majority")
.then((res)=>{
    console.log("Connection established")
})
.catch((err)=>{

    console.log("connection not established")
})