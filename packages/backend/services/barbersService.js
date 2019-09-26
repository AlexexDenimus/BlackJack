const mongoose = require('mongoose');

const Barber = mongoose.model('Barber');

const fetchBarber = async publicId => await Barber.findOne({ publicId });

const fetchBarbers = async () => await Barber.find({});

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
