// Initializes the `booking` service on path `/booking`
const createService = require('feathers-sequelize');
const createModel = require('../../models/booking.model');
const hooks = require('./booking.hooks');
const filters = require('./booking.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'booking',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/booking', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('booking');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
