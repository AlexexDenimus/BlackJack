const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

module.exports = (req, res, next) => {
  console.log('work');
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1];
  console.log(token);
  if (!token || token === '') {
    next(new Unauthorized('User is not logged in'));
    return;
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secretkey');
  } catch (err) {
    next(error || new Unauthorized('Access is denied due to invalid credentials'));
  }

  console.log(decodedToken);
  req.user = decodedToken.userId;
  console.log(req.user);
  next();
};
