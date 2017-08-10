// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tax = sequelizeClient.define('tax', {
    taxName:{
      type:Sequelize.STRING,
      allowNull:false
    },
    taxValue:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    status:{
      type:Sequelize.ENUM,
      values:['active','inactive'],
      allowNull:false,
      defaultValue:'active'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  tax.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    
  };

  return tax;
};
