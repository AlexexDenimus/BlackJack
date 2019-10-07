const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('User');

const fetchUsers = async () =>
  await User.find({}).populate({
    path: 'createdEvents',
    select: 'status barber service date publicId',
    populate: [{ path: 'barber', select: 'name' }, { path: 'service', select: 'name price' }],
  });

const fetchUser = async publicId =>
  await User.findOne({ publicId }).populate({
    path: 'createdEvents',
    select: 'status barber service date publicId',
    populate: [{ path: 'barber', select: 'name' }, { path: 'service', select: 'name price' }],
  });

const updateUser = async (publicId, args) => {
  try {
    const { name, visits, premiumUser } = args;
    const user = await User.findOne({ publicId });
    user.name = name ? name : user.name;
    user.visits = visits ? visits : user.visits;
    user.premiumUser = premiumUser ? premiumUser : user.premiumUser;
    const newUser = await user.save();
    return newUser;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async publicId => {
  try {
    const user = await User.findOneAndDelete({ publicId });
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async args => {
  try {
    const { email, password } = args;
    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error('User exists already!');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    return {
      result,
    };
  } catch (err) {
    throw err;
  }
};

const loginUser = async (email, password) => {
  try {
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
      userId: user.id,
      token,
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
