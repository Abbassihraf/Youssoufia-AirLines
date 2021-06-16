const express = require('express');
const order = express.Router();
const {orderPage, postOrder} = require('../controllers/orderController')

order.get('/', orderPage)
order.post('/', postOrder)


module.exports = order;