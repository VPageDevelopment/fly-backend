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
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    },
    status:{
      type:Sequelize.ENUM,
      values:['active','inactive'],
      allowNull:false,
      defaultValue:'active',
    },
    role:{
      type:Sequelize.ENUM,
      values:['user','employee','admin'],
      allowNull:false,
      defaultValue:'user'
    },
    userID:{
      type:Sequelize.INTEGER.UNSIGNED,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
