const express = require('express')
const app = express()
const port = 1000
var cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:'50mb'}))
app.use(cors())
const orderroutes = require('./routes/adminRoutes')

const db= require('./config/db')



app.use('/test4',orderroutes)

app.listen(port)