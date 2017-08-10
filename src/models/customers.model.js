// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const customers = sequelizeClient.define('customers', {
    name: {
      type:Sequelize.STRING,
        allowNull:false,
    },
    mobileNumber: {
      type:Sequelize.BIGINT,
      unique:true,
      allowNull:false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail:true
      }
    },
     address: {
      type:Sequelize.STRING,
        allowNull:false
    },
    
    city: {
      type:Sequelize.STRING,
        allowNull:false
    },
    state: {
      type:Sequelize.STRING,
        allowNull:false
    },
    zipCode: {
      type:Sequelize.STRING,
        allowNull:false
    },
    country: {
      type:Sequelize.STRING,
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

  customers.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    customers.hasMany(models.booking , {as:'customerBookings'});
    customers.belongsToMany(models.plan , {through:'customerPlan'});
    
  };

  return customers;
};
