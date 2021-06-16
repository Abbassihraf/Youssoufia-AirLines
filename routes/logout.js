const express = require('express');
const logout = express.Router();
const {logoutUser} = require('../controllers/logoutController')

logout.get('/', logoutUser)


module.exports = logout;