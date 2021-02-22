const Sequelize = require("sequelize");

const sequelize = new Sequelize("airline", 'root', '', {
    host: '127.0.0.1',
    dialect: "mysql",
    operatorAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;