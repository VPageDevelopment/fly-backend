const booking = require('./booking/booking.service.js');
const users = require('./users/users.service.js');
const vehicle = require('./vehicle/vehicle.service.js');
const vendor = require('./vendor/vendor.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(booking);
  app.configure(users);
  app.configure(vehicle);
  app.configure(vendor);
};
