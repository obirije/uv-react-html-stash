// upload-logo-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const uploadLogo = new Schema({
    uri: { type: String },
    id: { type: String },
    size: { type: Number }
  }, {
    timestamps: true
  });

  return mongooseClient.model('uploadLogo', uploadLogo);
};
