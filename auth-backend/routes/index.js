const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {validateToken} = require('../middleware/validateJwt');

router.post('/create/user',userController.createuser);
router.post('/login',userController.login);

router.use(validateToken);
router.get('/me',userController.me);

module.exports = router
