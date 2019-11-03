module.exports = async function adminCheck(user, event, type) {
  if (event.user == user || type == 'admin') {
    return;
  }
  throw new Error('You not allowed to change it');
};
