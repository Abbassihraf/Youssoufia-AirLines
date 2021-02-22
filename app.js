// Imports
const express = require ('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = 5000;


// DB connection
require("./src/database/connection");



// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));


// Set Templating engine
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) =>{
    res.render('index')
});


