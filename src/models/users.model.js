// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {type: String, unique: true},
    password: { type: String },
  	is_school: { type: Boolean},
  	phone_one: {type: String, required: true, unique: true},
  	phone_two: String,
  	address: String,
  	about: String,
  	account_no: String,
  	logo: String,
  	display_name: String,
  	administrator_title: String,
  	administrator_name: String,
  	fullname: String,
    is_platform_admin: { type: Boolean, default: false }

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
