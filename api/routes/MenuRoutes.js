const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();


//get all menu items
const menuController = require('../controllers/MenuController');

router.get('/', menuController.getAllMenuItems)
router.post('/', menuController.postMenuItem)
router.delete('/:id', menuController.deleteMenuItem)
router.get('/:id', menuController.singleMenuItem)
router.patch('/:id', menuController.updateMenuItem)
module.exports = router;