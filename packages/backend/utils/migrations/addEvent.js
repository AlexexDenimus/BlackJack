const mongoose = require('../../mongoose');

const EventModel = mongoose.model('Event');

const Event = {
  user: '5d9374dc63fd9d0161ad167e',
  barber: '5d8bc1adac18802dac4eaeed',
  service: '5d937617e92ba201db80c214',
  date: '2019-10-01T15:54:31.049Z',
};
(async () => {
  await EventModel.create(Event)
    .then(() => {
      console.log('Done');
    })
    .catch(error => {
      console.error(error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
})();
