const express = require('express');
const index = express.Router();
const {homePage, postOffer} = require('../controllers/indexController')

index.get('/', homePage)
index.post('/offer', postOffer)


module.exports = index;