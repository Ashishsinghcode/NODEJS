const route = require('express').Router()
let usercontroller = require('../controller/userController')

//User API start
route.post('/addcustomer', usercontroller.register)
route.post('/listcustomer', usercontroller.listcustomer)
//USer API end



module.exports = route