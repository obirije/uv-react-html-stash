// notifications-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const notifications = new Schema({
    created_by: Schema.Types.ObjectId,
    message: String,
    type: String,
    sent_to: Schema.Types.ObjectId
  }, {
    timestamps: true
  });

  return mongooseClient.model('notifications', notifications);
};
