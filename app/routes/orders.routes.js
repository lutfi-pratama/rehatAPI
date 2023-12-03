const controller = require('../controllers/orders.controller');
const { authJwt } = require('../middleware');

module.exports = function (app) {
  app.get('/api/ordersData', [authJwt.verifyToken], controller.getOrdersData);

  app.post('/api/chef', controller.postMstChef);
};
