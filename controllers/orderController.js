
const session = require('express-session')
const Order = require('../models/Order')
const Register = require('../models/Register')
const nodemailer = require('nodemailer')
require('dotenv').config();
// const sendgridTransport = require('nodemailer-sendgrid-transport')
const smtpTransport = require('nodemailer-smtp-transport');
const stripe = require('stripe')('**secret_key_from_stripe**');
// const mymail = req.session.userEmail;
let transporter = nodemailer.createTransport(smtpTransport({    
    host: 'smtp.gmail.com', 
    auth: { 
        type:'custom',       
         user: process.env.GM_E,        
         pass: process.env.GM_P    
    }
}));

exports.orderPage = (req, res, next)=>{
    res.render('order')
}

exports.postOrder = async (req, res, next)=>{
    

    const token = req.body.stripeToken;
    

    const createOrder = await Order.create({
        ofId: req.session.offerID,
        regId: req.session.userId,
        totalPrice: req.session.totalPrice,
        passengersNum: req.session.passNumber,

    })
    if(createOrder){
        const myOrder = await Order.findAll({
            limit:1,
            order: [ [ 'orId', 'DESC' ]]
        })
        if(myOrder){
            const charge = stripe.charges.create({
                amount: req.session.totalPrice * 100,
                currency: 'MAD',
                description: 'Fly Ticket',
                source: token,
                metadata: {orId: myOrder.orId}
            })
            
            // const findUser = await Register.findAll({
            //     where:{
            //         regId: req.session.userId
            //     }
            // })
            // if(findUser){
                res.render('order', {myOrder})
                console.log(req.session.userEmail)
                const mailOptions = {
                    from: process.env.GM_E,
                    to: req.session.userEmail,
                    subject: 'fly ticket order',
                    html: '<h1> You successfully order a ticket</h1>'
                  };
                return transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  }); 
                
                 
                
            //     .catch(err=>console.log(err))
            // }
            
             
        }
    } 
    
}
exports.updatePassengers = (req, res, next)=>{

}
