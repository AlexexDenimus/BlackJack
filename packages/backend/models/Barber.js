const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const barberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      mimetype: String,
      src: String,
      alt: String,
    },
    description: String,
  },
  { timestamps: true },
);

barberSchema.plugin(createPublicIDPlugin);

module.exports = mongoose.model('Barber', barberSchema);
