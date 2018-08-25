// notifications-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const notifications = new Schema({
    owner: Schema.Types.ObjectId,
    message: String,
    type: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('notifications', notifications);
};
