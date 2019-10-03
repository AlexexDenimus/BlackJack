const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const eventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Barber',
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['waiting', 'done', 'decline'],
      default: 'waiting',
    },
  },
  { timestamps: true },
);

eventSchema.plugin(createPublicIDPlugin);

module.exports = mongoose.model('Event', eventSchema);
