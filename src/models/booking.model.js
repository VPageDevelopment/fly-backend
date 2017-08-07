// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const booking = sequelizeClient.define('booking', {
    bookingID:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    pickUpLocation:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"User name should contain only letter"
            }
        }
    },
    dropLocation:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"User name should contain only letter"
            }
        }
    },
    fromDate:{
        type:Sequelize.DATE,
        allowNull:false,
        validate:{
            isDate:true
        }
    },
    toDate:{
        type:Sequelize.DATE,
        allowNull:false,
        validate:{
            isDate:true
        }
    },
    bookingStatus:{
      type:Sequelize.ENUM,
      values:['isNotAssign','inProgress' , 'completed'],
      allowNull:false,
      defaultValue:'isNotAssign'
    },
    startingKm:{
      type:Sequelize.BIGINT,
      allowNull:true
    },
    endingKm:{
      type:Sequelize.BIGINT,
      allowNull:true
    },
    totalKm:{
      type:Sequelize.BIGINT,
      allowNull:true
    },
    chargePerKm:{
      type:Sequelize.INTEGER,
      allowNull:true
    },
    driverCharge:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    extraCharge:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    extraChargeDesc:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    totalCharge:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    paymentType:{
        type:Sequelize.STRING,
        allowNull:true
    },
    accountNo:{
        type:Sequelize.STRING,
        allowNull:true
    },
    paymentStatus:{
      type:Sequelize.ENUM,
      values:['paid' , 'unpaid'],
      allowNull:false,
      defaultValue:'unpaid'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  booking.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    
    booking.belongsToMany(models.customers , {through:'customerBooking'});
    booking.belongsToMany(models.users , {through:'userBooking'});
    booking.belongsToMany(models.vehicle , {through:'vehicleBooking'});

  };

  return booking;
};
