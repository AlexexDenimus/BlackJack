const mongoose = require('mongoose');
const createPublicIDPlugin = require('../utils/createPublicIdPlugin');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

serviceSchema.index({ name: 1 });
serviceSchema.plugin(createPublicIDPlugin);

module.exports = mongoose.model('Service', serviceSchema);
