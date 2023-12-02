const { verifySignUp, formatResponse } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
  });

  app.post('/api/auth/login', controller.login);
  app.post('/api/auth/pin', controller.loginPIN);

  app.get('/api/auth/logout', controller.logout);

  // // Change Password
  // app.post('/api/auth/reset-password-email', controller.resetPassword);

  // // Update Password
  // app.post('/api/auth/update-password', controller.updatePassword);
};
