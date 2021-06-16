const Sequelize = require('sequelize')

const sequelize = require('../connection/database')

const Register = sequelize.define('registers', {
    regId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName : {
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING,
        
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.STRING
    }

})
// Register.sync()
// .then(result=>{
//     console.log(result)
    
// })
// .catch(err=>{
//     console.log(err)
// })
module.exports = Register;