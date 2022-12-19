const express = require('express')
const app = express()
const port = 1000
app.use(express.urlencoded({extended:true}))
const orderroutes = require('./routes/adminRoutes')

const db= require('./config/db')
app.get("/", (req,res) => {
    res.send("hello world")
})


app.use('/order',orderroutes)

app.listen(port)