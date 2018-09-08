const users = require('./users/users.service.js');
const payment = require('./payment/payment.service.js');
const notifications = require('./notifications/notifications.service.js');
const uploadLogo = require('./upload-logo/upload-logo.service.js');
const admission = require('./admission/admission.service.js');
const transactions = require('./transactions/transactions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(payment);
  app.configure(notifications);
  app.configure(uploadLogo);
  app.configure(admission);
  app.configure(transactions);
};
