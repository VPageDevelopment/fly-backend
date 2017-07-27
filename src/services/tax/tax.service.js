// Initializes the `tax` service on path `/tax`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tax.model');
const hooks = require('./tax.hooks');
const filters = require('./tax.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tax',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tax', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tax');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
