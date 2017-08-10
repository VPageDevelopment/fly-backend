// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vehicle = sequelizeClient.define('vehicle', {
    
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },
    type:{
      type:Sequelize.STRING,
      allowNull:false
    },
    model:{
      type:Sequelize.STRING,
      allowNull:false
    },
    regNo:{
      type:Sequelize.STRING,
      allowNull:false
    },
    fuelType:{
      type:Sequelize.ENUM,
      values:['diesel','petrol','gas'],
      allowNull:true
    },
    color:{
      type:Sequelize.STRING,
      allowNull:false
    },
    size:{
      type:Sequelize.STRING,
      allowNull:false
    },
    engineNo:{
      type:Sequelize.STRING,
      allowNull:true
    },
    chasisNo:{
      type:Sequelize.STRING,
      allowNull:true
    },
    batterySNo:{
      type:Sequelize.STRING,
      allowNull:true
    },
    seatCapacity:{
      type:Sequelize.STRING,
      allowNull:true
    },
    rtoTaxFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    rtoTaxTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    insuranceDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    insuranceDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    fitnessDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    fitnessDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    authDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    authDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    permitNo:{
      type:Sequelize.INTEGER,
      allowNull:true
    },
    fitnessCertificateNo:{
      type:Sequelize.INTEGER,
      allowNull:true
    },
    status:{
      type:Sequelize.ENUM,
      values:['active','inactive'],
      allowNull:false,
      defaultValue:'active'
    },
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  vehicle.associate = function (models) { 
    vehicle.belongsTo(models.vendor);
    vehicle.hasMany(models.booking, {as:'vehicleBooking'});
    vehicle.belongsToMany(models.driver, {through:'driverVechile'});
  };


  return vehicle;
};
