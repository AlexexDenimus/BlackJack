const mongoose = require('mongoose');

const User = mongoose.model('User');

const fetchUsers = async () =>
  await User.find({}).populate({
    path: 'createdEvents',
    select: 'status barber service date publicId',
    populate: [{ path: 'barber', select: 'name' }, { path: 'service', select: 'name price' }],
  });

module.exports = {
  fetchUsers,
};
