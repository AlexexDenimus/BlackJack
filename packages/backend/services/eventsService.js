const mongoose = require('mongoose');
const findById = require('../utils/core/findById');
const adminCheck = require('../utils/core/adminCheck');

const Event = mongoose.model('Event');
const Service = mongoose.model('Service');
const Barber = mongoose.model('Barber');
const User = mongoose.model('User');

const fetchEvents = async query => {
  const sort = query.sort ? query.sort : 'date';
  const order = query.order ? query.order : 'DESC';
  const sortType = [sort, order];
  return await Event.find({})
    .populate({ path: 'user', select: 'name email publicId' })
    .populate({ path: 'barber', select: 'name publicId' })
    .populate({ path: 'service', select: 'name price publicId' })
    .sort([sortType]);
};

const fetchEvent = async id => {
  const event = await Event.findAndPopulate(id);
  return event;
};

const createEvent = async (args, user) => {
  const { date, service, barber } = args;

  const existingService = await Service.findById({ _id: service });

  if (!existingService) {
    throw new Error('Service is not exist!');
  }

  const existingBarber = await Barber.findById({ _id: barber });

  if (!existingBarber) {
    throw new Error('Barber is not exist!');
  }

  const newEvent = new Event({
    date: date,
    service: existingService._id,
    barber: existingBarber._id,
    user: user,
  });

  const result = await newEvent.save();

  return result;
};

const deleteEvent = async (id, user) => {
  try {
    const event = await findById(Event, id);
    const userInfo = await findById(User, user);

    await adminCheck(user, event, userInfo.type);

    return await Event.findByIdAndDelete(event._id);
  } catch (err) {
    throw err;
  }
};

const updateEvent = async (id, args, user) => {
  try {
    const { barber, service, date, status } = args;
    const event = await findById(Event, id);
    const userInfo = await findById(User, user);
    await adminCheck(user, event, userInfo.type);
    event.service = service ? service : event.service;
    event.barber = barber ? barber : event.barber;
    event.date = date ? date : event.date;
    event.status = status ? status : event.status;
    const newEvent = await event.save();
    return newEvent;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchEvents,
  fetchEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
