const Sequelize = require('sequelize')

const sequelize = require('../connection/database')

const Order = sequelize.define('orders', {
    orId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    ofId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    regId : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalPrice:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    passengersNum : {
        type: Sequelize.INTEGER,
        allowNull: false
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
// Order.sync()
// .then(result=>{
//     console.log(result)
    
// })
// .catch(err=>{
//     console.log(err)
// })
module.exports = Order;