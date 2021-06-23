const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.post('/saveUser',userController.saveUser);
router.post('/login',userController.login);
router.post('/changePassword',userController.changePassword);

module.exports=router;
