const express = require('express')
const app = express()
const port = 2000
app.use(express.urlencoded({extended:true}))
const db = require('./config/db')
const userRoute= require('./routes/adminRoutes')

app.use('/practice', userRoute)

app.listen(port)