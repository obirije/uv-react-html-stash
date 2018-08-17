// Initializes the `payment` service on path `/payment`
const createService = require('feathers-mongoose');
const createModel = require('../../models/payment.model');
const hooks = require('./payment.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'payment',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/payment', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('payment');

  service.hooks(hooks);
};
