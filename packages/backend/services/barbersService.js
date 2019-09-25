const mongoose = require('mongoose');
const { get } = require('lodash');

const Barber = mongoose.model('Barber');

const fetchBarber = async publicId => await Barber.findOne({ publicId });

const fetchBarbers = async () => {
  const barbers = await Barber.find({});
  return {
    list: barbers,
  };
};

const addBarber = async attributes => {
  try {
    await Barber.create(attributes);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchBarbers,
  fetchBarber,
};
