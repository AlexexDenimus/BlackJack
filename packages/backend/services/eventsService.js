const mongoose = require('mongoose');
const findById = require('../utils/core/findById');
const adminCheck = require('../utils/core/adminCheck');
const fetchQuery = require('../utils/core/fetchQuery');
const createVisitOnDone = require('../utils/support/createVisitOnDone');

const Event = mongoose.model('Event');
const Service = mongoose.model('Service');
const Barber = mongoose.model('Barber');
const User = mongoose.model('User');

const fetchEvents = async query => {
  const { filter, sortType } = fetchQuery(query);
  return await Event.find(filter)
    .populate({ path: 'user', select: 'name email publicId' })
    .populate({ path: 'barber', select: 'name publicId' })
    .populate({ path: 'service', select: 'name price publicId' })
    .sort([sortType]);
};

const fetchEvent = async id => {
  const event = await findById(Event, id);
  return event;
};

const createEvent = async args => {
  console.log(args);
  const { date, services, barberId, user, notification } = args;

  const nativeServicesId = services.map(async serviceId => {
    const existingService = await findById(Service, serviceId);

    if (!existingService) {
      throw new Error('Service is not exist!');
    }

    return existingService._id;
  });
  const newServices = await Promise.all(nativeServicesId);

  const existingBarber = await findById(Barber, barberId);

  if (!existingBarber) {
    throw new Error('Barber is not exist!');
  }

  if (user.id) {
    const existingUser = await findById(User, user.id);

    if (!existingUser) {
      throw new Error('User is not exist!');
    }

    const newEvent = new Event({
      date: date,
      service: newServices,
      barber: existingBarber._id,
      user: existingUser._id,
      notification: notification ? true : false,
    });

    const result = await newEvent.save();

    await existingUser.createdEvents.push(newEvent);
    await existingUser.save();

    return result;
  } else {
    if (!user) {
      throw new Error('User is not exist!');
    }

    console.log(newServices);
    const newEvent = await new Event({
      date: date,
      service: newServices,
      barber: existingBarber._id,
      alternativeUser: {
        name: user.name,
        phoneNumber: user.phoneNumber,
      },
      notification: notification ? true : false,
    });

    const result = await newEvent.save();

    return result;
  }
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
    event.status = status ? await createVisitOnDone(status, event.user, User) : event.status;
    const newEvent = await event.save();
    return newEvent;
  } catch (err) {
    throw err;
  }
};

const fetchDoneServices = async () => {
  const services = await Event.aggregate([
    {
      $lookup: {
        from: 'services',
        localField: 'service',
        foreignField: '_id',
        as: 'service',
      },
    },
    {
      $match: { status: 'done' },
    },
    {
      $unwind: '$service',
    },
    {
      $group: {
        _id: '$service.name',
        count: { $sum: 1 },
        price: { $sum: '$service.price' },
      },
    },
  ]);
  return services;
};

const fetchDoneBarbers = async () => {
  const barbers = await Event.aggregate([
    {
      $lookup: {
        from: 'barbers',
        localField: 'barber',
        foreignField: '_id',
        as: 'barber',
      },
    },
    {
      $match: { status: 'done' },
    },
    {
      $unwind: '$barber',
    },
    {
      $group: {
        _id: '$barber.name',
        count: { $sum: 1 },
      },
    },
  ]);
  return barbers;
};

const fetchBookedDates = async () => {
  const todayDate = new Date();
  return await Event.aggregate([
    { $project: { date: 1 } },
    { $match: { date: { $gte: todayDate } } },
    { $group: { _id: '$date' } },
  ]);
};

module.exports = {
  fetchEvents,
  fetchEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  fetchDoneServices,
  fetchDoneBarbers,
  fetchBookedDates,
};
