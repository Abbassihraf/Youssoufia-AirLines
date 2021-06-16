const express = require('express');
const signin = express.Router();
const {signinPage, postRegister} = require('../controllers/signinController')

signin.get('/', signinPage)
signin.post('/', postRegister)


module.exports = signin;