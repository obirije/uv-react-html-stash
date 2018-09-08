// Initializes the `upload-logo` service on path `/upload-logo`
const createService = require('feathers-mongoose');
const createModel = require('../../models/upload-logo.model');
const hooks = require('./upload-logo.hooks');

const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./uploads');
const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');


  // Upload Service with multipart support
  app.use('/upload-logo',

      // multer parses the file named 'uri'.
      // Without extra params the data is
      // temporarely kept in memory
      multipartMiddleware.single('uri'),

      // another middleware, this time to
      // transfer the received file to feathers
      function(req,res,next){
          req.feathers.file = req.file;
          next();
      },
      blobService({Model: blobStorage})
  );

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-logo');

  service.hooks(hooks);
};
