const express = require('express')
var ser = express()
ser.use(express.urlencoded({extended:true}))
const userroutes = require('./routes/userroute')




ser.use('/user', userroutes)
ser.listen(2000)