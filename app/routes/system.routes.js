const controller = require('../controllers/system.controller');
const { authJwt } = require('../middleware');

module.exports = function (app) {
  app.post(
    '/api/dinein/tables',
    [authJwt.verifyToken],
    controller.postDineInTable
  );
  app.post(
    '/api/dinein/tablegroups',
    [authJwt.verifyToken],
    controller.postDineInTableGroup
  );

  app.get(
    '/api/dinein/tables',
    [authJwt.verifyToken],
    controller.getDineInTable
  );
  app.get(
    '/api/dinein/tablegroups',
    [authJwt.verifyToken],
    controller.getDineInTableGroup
  );
};
