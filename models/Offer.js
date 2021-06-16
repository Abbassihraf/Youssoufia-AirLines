const Sequelize = require('sequelize')

const sequelize = require('../connection/database')

const Offer = sequelize.define('offers', {
    ofId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    departure: {
        type: Sequelize.STRING
    },
    arrival : {
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dhour : {
        type: Sequelize.STRING
    },
    ahour : {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    airport: {
        type: Sequelize.STRING
    },
    passengers: {
        type: Sequelize.INTEGER,
    },
    // Timestamps
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),

    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
    }

})
// Offer.sync()
// .then(result=>{
//     console.log(result)
    
// })
// .catch(err=>{
//     console.log(err)
// })
module.exports = Offer;