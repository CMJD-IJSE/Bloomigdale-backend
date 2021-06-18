const express = require('express');
const itemController = require('../controller/CustomerController');

const router = express.Router();

router.post('/saveItem',itemController.saveItem);
router.delete('/deleteItem',itemController.deleteItem);
router.get('/getItem',itemController.getItem);
router.put('/updateItem',itemController.updateItem);
router.get('/getAllItems',itemController.getAllItems);
