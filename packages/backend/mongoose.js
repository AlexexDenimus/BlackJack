const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.Promise = Promise;

dotenv.config({ path: '.env.example' });

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI);
require('./models/Barber');

module.exports = mongoose;
