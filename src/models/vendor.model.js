// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendor = sequelizeClient.define('vendor', {
    
    companyName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    companyPhoneNo:{
      type:Sequelize.BIGINT,
      unique:true,
      allowNull:false
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
    vendorStatus:{
      type:Sequelize.ENUM,
      values:['active' , 'inactive'],
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

  vendor.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
   
    vendor.hasMany(models.vehicle, {as:'vendorVehicle'});
    vendor.hasMany(models.driver, {as:'vendorDriver'});
  };


  return vendor;
};