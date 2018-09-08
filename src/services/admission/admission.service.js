// Initializes the `admission` service on path `/admission`
const createService = require('feathers-mongoose');
const createModel = require('../../models/admission.model');
const hooks = require('./admission.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'admission',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/admission', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('admission');

  service.hooks(hooks);
};
