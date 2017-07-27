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
    vehicle.hasMany(models.booking , {
      foreignKey:"vehicleID"
    });

    

    vehicle.belongsTo(models.vendor);
  };

  return vehicle;
};
