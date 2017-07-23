// Initializes the `vendor` service on path `/vendor`
const createService = require('feathers-sequelize');
const createModel = require('../../models/vendor.model');
const hooks = require('./vendor.hooks');
const filters = require('./vendor.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'vendor',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/vendor', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('vendor');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
