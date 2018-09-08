const { authenticate } = require('@feathersjs/authentication').hooks;
const dauria = require('dauria');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      function(context){


        if (!context.data.uri && context.params.file){
              const file = context.params.file;
              const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
              context.data = {uri: uri};
        }

      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      function(context){
            
        const userId = context.params.user._id;
        console.log("result from image upload-----------", context.result);
        context.app.service('users').patch(userId, { image_id: context.result.id}).then( result => {
          console.log("updated user image id", result);
          return context;
        }).catch( err => {
          throw new Error("could not save image id to database");
        });
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
