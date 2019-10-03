const mongoose = require('mongoose');

const Event = mongoose.model('Event');

const fetchEvents = async () =>
  await Event.find({})
    .populate({ path: 'user', select: 'name email publicId' })
    .populate({ path: 'barber', select: 'name publicId' })
    .populate({ path: 'service', select: 'name price publicId' });

module.exports = {
  fetchEvents,
};
