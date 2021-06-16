const Sequelize = require('sequelize')
const sequelize = new Sequelize('youairline', 'root', '', {
    dialect: 'mysql',
    host:'localhost'
    
})

module.exports = sequelize;