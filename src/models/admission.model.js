// admission-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const admission = new Schema({
    text: { type: String, required: true },
    owner: Schema.Types.ObjectId
  }, {
    timestamps: true
  });

  return mongooseClient.model('admission', admission);
};
