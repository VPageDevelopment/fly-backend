// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const plan = sequelizeClient.define('plan', {
    planName: {
      type:Sequelize.STRING,
      allowNull:false
    },
    planKm: {
      type:Sequelize.STRING,
      allowNull:true
    },
    planCharge:{
      type:Sequelize.STRING,
      allowNull:true
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

  plan.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    plan.belongsToMany(models.customers, {through:'customerPlan'});
  };

  return plan;
};
