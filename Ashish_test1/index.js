const express =require('express')
const ser =express()
ser.use(express.urlencoded({extended:true}))
const user = require('./routes/user')

ser.use('/userapi',user)
ser.listen(2000)
