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
    phoneNumber: {
      type: String,
      validate: [
        {
          validator: value => /^((\+7)+([0-9]){10})$/.test(value),
          msg: 'Format: +7-(999)-999-99-99',
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
    registrationType: {
      type: String,
      enum: ['default', 'google', 'vk'],
      default: 'default',
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
