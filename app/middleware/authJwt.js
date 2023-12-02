const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).send({
      rescode: 403,
      message: 'No token provided!',
    });
  }

  jwt.verify(token, authConfig.secret, (err) => {
    if (err) {
      return res.status(401).send({
        rescode: 401,
        message: 'Unauthorized!',
      });
    }
    next();
    return null;
  });
  return null;
};

const authJwt = {
  verifyToken,
};
module.exports = authJwt;
