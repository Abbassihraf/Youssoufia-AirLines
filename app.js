const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const homePage = require('./routes/index')
const signinPage = require('./routes/signin')
const loginPage = require('./routes/login')
const checkoutPage = require('./routes/checkout')
const logoutUser = require('./routes/logout')
const offersPage = require('./routes/offers')
const orderPage = require('./routes/order')
const path = require('path')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sequelize = require('./connection/database')
const bodyParser = require('body-parser')
const {auth}= require('./middleware/auth')
const flash = require('connect-flash')


app.use(flash())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(ejsLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')
// **************session and cookies***********
const TWO_HOURS = 1000*60*60*2;

const { 
    SESS_LIFETIME = TWO_HOURS,
    NODE_ENV = 'development',
    SESS_SECRET = 'ssht!thisisasecret!'
} = process.env
const IN_PROD = NODE_ENV === 'production';

const myStore = new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
});
app.use(
    session({
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: myStore,
    
    cookie: { 
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    },   
})
);
// myStore.sync();
app.use((req, res, next) => {
    res.locals.sid = req.session.userId;
    res.locals.email = req.session.userEmail;
    res.locals.numberOfPassengers = req.session.passNumber;
    res.locals.myOfferId = req.session.offerID;
    
    next();
});

app.use('/', homePage);
app.use('/signin', signinPage);
app.use('/login', loginPage);
app.use('/logout', logoutUser);
app.use('/offers', offersPage);
app.use('/order', auth, orderPage);
app.use('/checkout',auth, checkoutPage);

// the last middleware should be 404 page
app.use((req, res)=>{
    res.status(404).render('404')
})


module.exports = app;