const { urlencoded, application } = require('express')
const express = require('express')
const server = express()
const port = 3000
server.use(urlencoded({extended:true}))
const config =require('./config/db')
const admin = require('./config/seeder')
const userroute = require('./router/adminRouter')




admin.insertadmin()
server.use('/admin',userroute)

server.listen(port, ()=>{console.log('server running on port'+port)})