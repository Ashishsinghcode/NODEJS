const router = require('express').Router()


var StudentController = require('../controllers/studentController')
// Start Student API
router.post('/addstudent',StudentController.addStudent)
router.post('/liststudent',StudentController.listStudent)
router.post('/listonestudent',StudentController.listoneStudent)

// End Student

module.exports = router

