const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/User')
.then(()=> console.log('Server connected'))