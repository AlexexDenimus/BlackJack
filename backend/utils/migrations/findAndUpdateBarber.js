const mongoose = require('mongoose');

const BarberModel = mongoose.model('Barber');

(async () => {
    await BarberModel.findOneAndUpdate({experience: 10}, {name: 'Витя Тесный'})
    .then(() => {
        console.log('Done');
      })
      .catch(error => {
        console.error(error);
        process.exitCode = 1;
      })
      .finally(() => mongoose.disconnect());
})();