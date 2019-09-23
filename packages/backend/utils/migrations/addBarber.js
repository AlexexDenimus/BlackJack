const mongoose = require('mongoose');

const BarberModel = mongoose.model('Barber');

const Boris = {
    name: 'Борис Викторович',
    socialMedia: {
        vk: "vk",
        instagram: "inst",
        twitter: "twit"
    },
    picture: "picture",
    description: "gg wp",
    experience: 10
}

(async () => {
    await BarberModel.insertOne(Boris)
    .then(() => {
        console.log('Done');
      })
      .catch(error => {
        console.error(error);
        process.exitCode = 1;
      })
      .finally(() => mongoose.disconnect());
})();