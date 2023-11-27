const controller = require('../controllers/orders.controller');

function itemRoutes(app) {
  app.get('/api/menuitems', controller.getMenuItems);
}

module.exports = function (app) {
  itemRoutes(app);

  app.post('/api/chef', controller.postMstChef);
};
