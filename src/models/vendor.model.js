// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendor = sequelizeClient.define('vendor', {
      vendorID:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    vendorCompanyName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"User name should contain only letter"
            }
        }
    },
    vendorCompanyAddress:{
        type:Sequelize.TEXT,
        allowNull:false,
    },
    vendorCompanyPhoneNo:{
      type:Sequelize.BIGINT,
      unique:true,
      allowNull:false,
      validate:{
        not:{
            args:["[a-z]",'i'],
            msg:"Please enter a valid number"
        },
        len:{
            args:[7,20],
            msg:"Min length of the phone number is 7 and max is 20"
        }
      }
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
   

  };


  return vendor;
};