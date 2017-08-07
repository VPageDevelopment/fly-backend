// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vehicle = sequelizeClient.define('vehicle', {
     vehicleID:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    vehicleName:{
      type:Sequelize.STRING,
      allowNull:false
    },
    vehicleType:{
      type:Sequelize.STRING,
      allowNull:false
    },
    vehicleModle:{
      type:Sequelize.STRING,
      allowNull:false
    },
    vehicleRegNo:{
      type:Sequelize.STRING,
      allowNull:false
    },
    vehicleFuelType:{
      type:Sequelize.ENUM,
      values:['d','p','g'],
      allowNull:true
    },
    vehicleColor:{
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
          isAlpha:{
              args:true,
              msg:"User name should contain only letter"
          }
      }
    },
    vehicleSize:{
      type:Sequelize.STRING,
      allowNull:false
    },
    vehicleEngineNumber:{
      type:Sequelize.STRING,
      allowNull:true,
    },
    vehicleChasisNumber:{
      type:Sequelize.STRING,
      allowNull:true,
    },
    vehicleBatterySerialNumber:{
      type:Sequelize.STRING,
      allowNull:true,
    },
    vehicleSeatCapacity:{
      type:Sequelize.STRING,
      allowNull:true,
    },
    vehicleRTOTaxFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleRTOTaxTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleIncuranceDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleIncuranceDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleFitnessDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleFitnessDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleAuthDateFrom:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehicleAuthDateTo:{
      type:Sequelize.DATEONLY,
      allowNull:true
    },
    vehiclePermitNo:{
      type:Sequelize.INTEGER,
      allowNull:true
    },
    vehicleFitnessCertificateNo:{
      type:Sequelize.INTEGER,
      allowNull:true
    }
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  vehicle.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vehicle.belongsTo(models.vendor);
    vehicle.belongsToMany(models.booking, {through:'vehicleBooking'});

  };


  return vehicle;
};
