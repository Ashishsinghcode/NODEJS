const router = require('express').Router()

let usercontroller = require('../controllers/userController')



const multer = require('multer')
const profilepicstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/profilepic')
    },
    filename: function (req, file, cb) {
        
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const new_name = uniqueSuffix+file.originalname
      cb(null, file.fieldname + '-' + new_name)
    }
  })
  
  const profilepic_upload = multer({ storage: profilepicstorage })


  



router.post('/addcustomer',profilepic_upload.single('profile_pic') ,usercontroller.register)



//ERROR PAGE
router.all("**",function(req,res){
    res.json({
        'status':404,
        'success':false,
        'message':'Page not found'
    })
})
//END ERROR PAGE
module.exports = router