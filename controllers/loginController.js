const User = require('../models/Register')
const bcrypt = require('bcryptjs');
const session = require('express-session');
const Offer = require('../models/Offer');


exports.loginPage = (req, res, next) => {
    
    res.render('login',{errorMessage: req.flash('error')})
   
}

exports.postLogin = async (req, res, next) => {
  
    const ifUserExist = await User.findOne({
        where: {
            email: req.body.email,
        }
    }) 
        if (!ifUserExist) {
            req.flash('error', 'Invalid email or password!')
            return res.redirect('login');
        }
        const match = await bcrypt.compare(req.body.password, ifUserExist.password)
   
        if(!match){
            req.flash('error', 'Invalid email or password!')
            return res.redirect('login');
        } 
   
        if (match && ifUserExist){
            const {email}=req.body;
            req.session.userId = ifUserExist.regId;
            req.session.userEmail = email;
            console.log('email:' + email) 
            console.log(req.session.offerID)
                if(!req.session.offerID){ 
                        return res.redirect('/')   
                }else{
                    Offer.findAll({
                        where:{
                            ofId: req.session.offerID,
                        }
                    })
                    .then(newOffer=>{
                        return res.render('checkout', {newOffer})
                    })
                    .catch(err=>console.log(err))
                }                         
            } 
}