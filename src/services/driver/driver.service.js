// Initializes the `driver` service on path `/driver`
const createService = require('feathers-sequelize');
const createModel = require('../../models/driver.model');
const hooks = require('./driver.hooks');
const filters = require('./driver.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'driver',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/driver', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('driver');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
