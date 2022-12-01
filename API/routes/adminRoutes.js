const router = require('express').Router()

var catagorycontroller =require('../controllers/adminControl')
var productcontroller = require('../controllers/productController')
router.post('/addcatagory',catagorycontroller.addCatagory)
router.get('/listcatagory',catagorycontroller.listCatagory)
router.post('/addproduct',productcontroller.addProduct)
router.get('/getproduct',productcontroller.getProduct)

module.exports = router