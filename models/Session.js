const Sequelize = require('sequelize')

const sequelize = require('../connection/database')

sequelize.define("Session", {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.TEXT,
  });
  
  function extendDefaultFields(defaults, session) {
    return {
      data: defaults.data,
      expires: defaults.expires,
      userId: session.userId,
    };
  }
  
const store = new SequelizeStore({
    db: sequelize,
    table: "Session",
    extendDefaultFields: extendDefaultFields,
  });