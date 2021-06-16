const express = require('express');
const login = express.Router();
const {loginPage, postLogin} = require('../controllers/loginController')

login.get('/', loginPage)
login.post('/', postLogin)


module.exports = login;