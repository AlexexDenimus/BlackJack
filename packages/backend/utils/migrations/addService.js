const mongoose = require('../../mongoose');

const ServiceModel = mongoose.model('Service');

const Service = {
  name: 'Стрижка',
  price: 100,
};
(async () => {
  await ServiceModel.create(Service)
    .then(() => {
      console.log('Done');
    })
    .catch(error => {
      console.error(error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
})();
