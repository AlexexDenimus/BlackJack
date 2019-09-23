const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const barberSchema = new mongoose.Schema({
  name: String,
  socialMedia: {
      vk: String,
      instagram: String,
      twitter: String
  },
  picture: String,
  description: String

}, { timestamps: true });


barberSchema.index({ name: 1 });
barberSchema.plugin(createPublicIDPlugin);

module.exports = mongoose.model('Barber', barberSchema);