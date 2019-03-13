const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {validateToken} = require('../middleware/validateJwt');
const {UserCreateValidator} = require('../middleware/celebrateValidator');
const {isUserByEmail} = require('../middleware/UserValidator');

router.post('/create/user',[UserCreateValidator],userController.createuser);
router.post('/login',userController.login);

router.use(validateToken);
router.get('/me',userController.me);
router.put('/user/:email',[UserCreateValidator,isUserByEmail],userController.updateUser)


module.exports = router
