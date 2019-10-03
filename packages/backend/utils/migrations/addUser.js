const mongoose = require('../../mongoose');

const UserModel = mongoose.model('User');

const Boris = {
  email: 'test@test.ru',
  password: 'qwe',
};
(async () => {
  await UserModel.create(Boris)
    .then(() => {
      console.log('Done');
    })
    .catch(error => {
      console.error(error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
})();
