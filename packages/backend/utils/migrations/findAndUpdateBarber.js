const mongoose = require('../../mongoose');

const BarberModel = mongoose.model('Barber');

(async () => {
  await BarberModel.findOneAndUpdate(
    { publicId: '9e037b55-fc96-4f64-b718-1f170fafff3c' },
    { name: 'Витя Тесный' },
  )
    .then(() => {
      console.log('Done');
    })
    .catch(error => {
      console.error(error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
})();
