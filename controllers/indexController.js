const Offer = require('../models/Offer');
// const session = require('express-session');
const { Op } = require('sequelize');


exports.homePage = (req, res, next)=>{

    Offer.findAll()
    .then((offers)=>{
        res.render('index', {offers})

    })
    .catch(err=>console.log(err));
}


exports.postOffer = (req, res, next)=>{
    const{departure, arrival, passengers, fromDate, toDate}= req.body;
    try{
        const newOffer = Offer.findAll({
            where:{
                departure: departure,
                arrival: arrival,
                date:{
                    [Op.between]:[fromDate , toDate]
                }

            }
        })
        .then((offers)=>{
            req.session.passNumber = passengers;
            console.log(passengers)
            if(newOffer) return res.render('offers', {offers})
        })
        .catch(err=>console.log(err))
        
            // req.session.departure = departure;
            // console.log(departure)
            // req.session.arrival = arrival;
            // console.log(arrival)
            // req.session.fromDate = fromDate;
            // console.log(fromDate)
            // req.session.passNumber = passengers;
            // console.log(passengers)
    }catch(err){
        console.log(err)
    }
        
}
    
    
        
   
 