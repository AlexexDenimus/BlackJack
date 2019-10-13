const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1];
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

  req.userId = decodedToken.userId;
  next();
};
