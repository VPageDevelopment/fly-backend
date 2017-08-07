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
    customerName: {
      type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"User name should contain only letter"
            }
        }
    },
    mobileNumber: {
      type:Sequelize.BIGINT,
      unique:true,
      allowNull:false,
      validate:{
        not:{
            args:["[a-z]",'i'],
            msg:"Please enter a valid number"
        },
        len:{
            args:[10,20],
            msg:"Min length of the phone number is 10"
        }
      }
    },
    customerEmail:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail:true
      }
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
    customers.belongsToMany(models.booking , {through:'customerBooking'});
    customers.belongsToMany(models.plan , {through:'customerPlan'});
    
  };

  return customers;
};