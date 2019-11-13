const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const set = require('lodash/set');
const findById = require('../utils/core/findById');
const fetchQuery = require('../utils/core/fetchQuery');

const User = mongoose.model('User');

const fetchUsers = async query => {
  const { filter, sortType } = fetchQuery(query);
  return await User.find(filter)
    .populate({
      path: 'createdEvents',
      select: 'status barber service date publicId',
      populate: [{ path: 'barber', select: 'name' }, { path: 'service', select: 'name price' }],
    })
    .sort([sortType]);
};

const fetchUser = async id => {
  const user = await findById(User, id);

  return user.populate({
    path: 'createdEvents',
    select: 'status barber service date publicId',
    populate: [{ path: 'barber', select: 'name' }, { path: 'service', select: 'name price' }],
  });
};

const updateUser = async (id, args) => {
  try {
    const { name, visits, premiumUser } = args;
    const user = await findById(User, id);
    user.name = name ? name : user.name;
    user.visits = visits ? visits : user.visits;
    user.premiumUser = premiumUser ? premiumUser : user.premiumUser;
    const newUser = await user.save();
    return newUser;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async id => {
  try {
    const user = await findById(User, id);
    return await User.findByIdAndDelete(user._id);
  } catch (err) {
    throw err;
  }
};

const createUser = async args => {
  try {
    const { email, password, registrationType, publicId } = args;
    const user = await User.findOne({ email: email });

    if (user) {
      if (user.registrationType !== 'google' && user.registrationType !== 'vk') {
        throw new Error('User exists already!');
      }
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = registrationType
      ? new User({
          email: email,
          registrationType: registrationType,
          password: hashedPassword,
          publicId: publicId,
        })
      : new User({
          email: email,
          password: hashedPassword,
        });

    const result = await newUser.save();
    return result;
  } catch (err) {
    throw err;
  }
};

const loginUser = async args => {
  try {
    const { email, password } = args;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is not correct');
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, 'secretkey', {
      expiresIn: '1w',
    });
    return {
      userId: user.publicId,
      token,
      role: user.type,
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchUsers,
  createUser,
  loginUser,
  updateUser,
  fetchUser,
  deleteUser,
};
