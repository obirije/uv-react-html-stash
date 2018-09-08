// transactions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transactions = new Schema({

    approvalStatus: { type: String, required: true },

    chargeStatus: { type: String, required: true},

    nameOnCard: String,

    isLive: { type: Number},

    transRef: { type: String, required: true},

    amount: { type: String, required: true},

    owner: { type: Schema.Types.ObjectId, required: true},

    fee: { type: String},

    paymentType: { type: String},

    chargeToken: { type: String},

    customerId: { type: String},

    currency: { type: String, required: true},

    approvedBy: { type: Schema.Types.ObjectId },

    isTokenCharge: { type: Boolean, default: false},

    cardExpM: { type: String},

    cardExpY: { type: String},

    cardBIN: { type: String},

    cardLastFour: { type: String},

    cardBrand: { type: String},

    cardFullDetails: Schema.Types.Mixed,

    paymentId: Schema.Types.ObjectId

  }, {
    timestamps: true
  });

  return mongooseClient.model('transactions', transactions);
};
