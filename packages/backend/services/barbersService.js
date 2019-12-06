const mongoose = require('mongoose');
const findById = require('../utils/core/findById');
const fetchQuery = require('../utils/core/fetchQuery');

const Barber = mongoose.model('Barber');

const fetchBarber = async id => {
  const barber = await findById(Barber, id);

  return barber;
};

const fetchBarbers = async query => {
  const { filter, sortType } = fetchQuery(query);
  return await Barber.find(filter).sort([sortType]);
};

const createBarber = async args => {
  try {
    const { name, description, picture } = args;

    const newBarber = await Barber.create({
      name: name,
      description: description,
      picture: {
        src: picture.src,
        alt: picture.name,
        mimetype: picture.type,
      },
    });
    const result = await newBarber.save();
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteBarber = async id => {
  try {
    const barber = await findById(Barber, id);

    return await Barber.findByIdAndDelete(barber._id);
  } catch (err) {
    throw err;
  }
};

const updateBarber = async (id, args) => {
  try {
    const { name, picture, description } = args;
    const barber = await findById(Barber, id);
    barber.name = name ? name : barber.name;
    barber.description = description ? description : barber.description;
    barber.picture = picture
      ? { alt: picture.name, mimetype: picture.type, src: picture.src }
      : barber.picture;
    const newBarber = await barber.save();
    return newBarber;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchBarbers,
  fetchBarber,
  createBarber,
  deleteBarber,
  updateBarber,
};
