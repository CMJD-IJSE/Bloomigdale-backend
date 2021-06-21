const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.post('/saveUser',userController.saveUser);

module.exports=router;
