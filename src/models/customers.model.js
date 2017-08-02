// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const customers = sequelizeClient.define('customers', {
    
     customerID:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  customers.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    customers.hasMany(models.booking, {
      foreignKey:"customerID"
    });
  };

  return customers;
};
