const express = require('express');
const checkout = express.Router();
const {checkoutPage} = require('../controllers/checkoutController')



checkout.get('/', checkoutPage)


module.exports = checkout;