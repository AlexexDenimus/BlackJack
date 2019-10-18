module.exports = async function adminCheck(user, event, type) {
  console.log(user);
  console.log(event.user === user);
  console.log(type);
  if (event.user == user || type == 'admin') {
    return;
  }
  throw new Error('You not allowed to change it');
};
