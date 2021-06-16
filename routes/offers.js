const express = require('express');
const offers = express.Router();
const {offersPage, postOffer} = require('../controllers/offersController')

offers.get('/', offersPage)
offers.post('/', postOffer)


module.exports = offers;