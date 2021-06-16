const Offer = require('../models/Offer')


exports.offersPage = (req, res, next)=>{ 
        res.render('offers')   
}

exports.postOffer = (req, res, next)=>{
        try{
                req.session.totalPrice = req.body.price * req.session.passNumber;
                const offerId = req.body.offerId;
                console.log(offerId)
                req.session.offerID = offerId;
                const myOffer = Offer.findAll({
                        where:{
                                ofId: offerId,
                        }
                }) 
                .then(newOffer=>{
                req.session.userId && myOffer ? res.render('checkout', {newOffer})
                : res.render('login', {newOffer,errorMessage: req.flash('error')})
                }) 
                .catch(err=>console.log(err))              
                
        }catch(err){
                throw err
        }
        
               
      
}