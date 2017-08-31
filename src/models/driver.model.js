// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const driver = sequelizeClient.define('driver', {
 
    name: {
      type:Sequelize.STRING,
      allowNull:false
    },
    mobileNumber: {
      type:Sequelize.BIGINT,
      unique:true,
      allowNull:false
    },
    address: {
      type:Sequelize.STRING,
      allowNull:false
    },
    driverLNo: {
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

  driver.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    driver.hasMany(models.booking,{as: 'driverBookings' , });
    driver.belongsToMany(models.vehicle , {through:'driverVechile'});
    driver.belongsToMany( models.vendor , {through:'driverVendor'});
  };

  return driver;
};
