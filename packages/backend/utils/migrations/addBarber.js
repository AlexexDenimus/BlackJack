const mongoose = require('../../mongoose');

const BarberModel = mongoose.model('Barber');

const Boris = {
  name: 'Борис Викторович',
  picture: 'picture',
  description: 'gg wp',
};
(async () => {
  await BarberModel.create(Boris)
    .then(() => {
      console.log('Done');
    })
    .catch(error => {
      console.error(error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
})();
