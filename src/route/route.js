const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const  authentication  = require('../middlewares/auth');

///_________________________________________test api_________________________________________
router.get('/test-me', function (req, res) {
    res.send({ status: true, message: "test-api working fine" })
})


//_________________________________________User Api's_________________________________________
router.post('/register', userController.registerUser)// user creation 
router.post('/login', userController.userLogin)//user login
router.get("/getuser/:userId", authentication, getUserById);//to authenticate user simply use get request and 
//provide token in headers x-api-key as key and value as token.
router.get("/getuser", authentication, getUsers);//to get all users use get request


module.exports = router