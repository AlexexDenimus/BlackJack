const mongoose = require('mongoose');

const Service = mongoose.model('Service');

const fetchServices = async () => await Service.find({});

module.exports = {
  fetchServices,
};
