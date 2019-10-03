const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'User',
    },
    email: {
      type: String,
      required: true,
      validate: [
        {
          validator: value => /@.+\..*$/.test(value),
          msg: 'Format: example@example.com',
        },
      ],
    },
    password: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      default: 0,
    },
    premiumUser: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ['member', 'admin'],
      default: 'member',
    },
    createdEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
  },
  { timestamps: true },
);

userSchema.index({ email: 1 });
userSchema.plugin(createPublicIDPlugin);

module.exports = mongoose.model('User', userSchema);
