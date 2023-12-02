const controller = require('../controllers/orders.controller');
const { authJwt } = require('../middleware');

function itemRoutes(app) {
  app.get('/api/menuitems', [authJwt.verifyToken], controller.getMenuItems);
  app.get('/api/ordersItem', [authJwt.verifyToken], controller.getOrdersItem);
}

module.exports = function (app) {
  itemRoutes(app);

  app.post('/api/chef', controller.postMstChef);
};
