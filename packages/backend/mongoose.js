const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.Promise = Promise;

dotenv.config();

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(process.env.DB_CONN, {
  dbName: 'barbershop',
  auth: { user: process.env.DB_USER, password: process.env.DB_PW },
  useNewUrlParser: true,
});
require('./models/Barber');
require('./models/User');
require('./models/Service');
require('./models/Event');

module.exports = mongoose;
