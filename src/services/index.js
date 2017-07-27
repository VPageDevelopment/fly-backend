const booking = require('./booking/booking.service.js');
const users = require('./users/users.service.js');
const vehicle = require('./vehicle/vehicle.service.js');
const vendor = require('./vendor/vendor.service.js');
const driver = require('./driver/driver.service.js');
const tax = require('./tax/tax.service.js');
const plan = require('./plan/plan.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(booking);
  app.configure(users);
  app.configure(vehicle);
  app.configure(vendor);
  app.configure(driver);
  app.configure(tax);
  app.configure(plan);
};
