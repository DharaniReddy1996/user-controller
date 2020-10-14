const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const usersController = require('../controllers/users');
const router = express.Router();

router.get('/index',usersController.getHome);

module.exports = router;