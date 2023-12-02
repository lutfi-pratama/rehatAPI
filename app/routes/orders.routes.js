const controller = require('../controllers/orders.controller');
const { authJwt } = require('../middleware');

function itemRoutes(app) {
  app.get('/api/ordersData', [authJwt.verifyToken], controller.getOrdersData);
}

module.exports = function (app) {
  itemRoutes(app);

  app.post('/api/chef', controller.postMstChef);
};
