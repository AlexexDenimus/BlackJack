const mongoose = require('mongoose');
const findById = require('../utils/core/findById');
const fetchQuery = require('../utils/core/fetchQuery');

const Service = mongoose.model('Service');

const fetchServices = async query => {
  const { filter, sortType } = fetchQuery(query);
  return await Service.find(filter).sort([sortType]);
};

const fetchService = async id => {
  const service = await findById(Service, id);

  return service;
};

const updateService = async (id, args) => {
  try {
    const { price, name } = args;
    const service = await findById(Service, id);
    service.name = name ? name : service.name;
    service.price = price ? price : service.price;
    const newService = await service.save();
    return newService;
  } catch (err) {
    throw err;
  }
};

const deleteService = async id => {
  try {
    const service = await findById(Service, id);
    return await Service.findByIdAndDelete(service._id);
  } catch (err) {
    throw err;
  }
};

const createService = async args => {
  try {
    const { name, price } = args;
    const service = await Service.findOne({ name });
    if (service) {
      throw new Error('Service exists already!');
    }
    const newService = new Service({
      name: name,
      price: price,
    });
    const result = await newService.save();
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchServices,
  updateService,
  fetchService,
  deleteService,
  createService,
};
