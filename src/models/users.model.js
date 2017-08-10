// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    mobileNumber:{
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
    status:{
      type:Sequelize.ENUM,
      values:['active','inactive'],
      allowNull:false,
      defaultValue:'active'
    },
    role:{
      type:Sequelize.ENUM,
      values:['user','employee','admin'],
      allowNull:false,
      defaultValue:'user'
    },
    trems:{
      type:Sequelize.ENUM,
      values:["YES","NO"],
      allowNull:false,
      defaultValue:"YES"
    },
    id:{
      type: Sequelize.UUID,
      primaryKey:true,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  users.associate = function (models) { 
    // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    users.hasMany(models.booking, {as:'userBooking'});
    
  };

  return users;
};
