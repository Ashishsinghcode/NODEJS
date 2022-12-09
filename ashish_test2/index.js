const express = require('express')
const app = express()
const port = 7000
app.use(express.urlencoded({extended:true}))
const db = require('./config/db')
const StudentRoute= require('./routes/studentRoutes')

app.use('/test', StudentRoute)

app.listen(port)