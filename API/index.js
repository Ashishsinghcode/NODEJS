const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
const adminroutes = require('./routes/adminRoutes')
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/detail', function (req, res) {
  res.json({
    "status":200,
    "Name":"Ashish"
  })
})


app.post('/details', function (req, res) {
  res.json({
    "status":200,
    "Name":"Ashish",
    "Class":"MCA",
    "body":req.body
  })
})


app.get('/contact', function (req, res) {
  res.json([{
    "status":200,
    "Name":"Ashish",
    "Class":"MCA",
    "address":"Punjab avenue",
    "Mobile":7250888739,
  },
  {
    "status":200,
    "Name":"Palvi",
    "Class":"MCA",
    "address":"Jawahar nagar",
    "Mobile":9653892887,
  }]
  
 )
})
app.get('/student', function (req, res) {
  res.json([{
    "status":200,
    "Name":"Ashish",
    "Class":"MCA",
    "Roll":2102723
    
  },
  {
    "status":200,
    "Name":"Palvi",
    "Class":"MCA",
    "Roll":2102732
    
  }]
  
 )
})
app.use('/admin',adminroutes)

app.listen(3000)