// Initializes the `vehicle` service on path `/vehicle`
const createService = require('feathers-sequelize');
const createModel = require('../../models/vehicle.model');
const hooks = require('./vehicle.hooks');
const filters = require('./vehicle.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'vehicle',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/vehicle', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('vehicle');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
