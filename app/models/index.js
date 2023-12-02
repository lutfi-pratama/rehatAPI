const Sequelize = require('sequelize');
const config = require('../config/db.config');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;

db.sequelize = sequelize;
// AUTH
db.AppUser = require('./Auth/app-user.model')(sequelize, Sequelize);
// ORDER
db.MenuPage = require('./Order/menu-page')(sequelize, Sequelize);
db.MenuItem = require('./Order/menu-items')(sequelize, Sequelize);
db.MstChef = require('./Order/mst-chef')(sequelize, Sequelize);
// db.analysis = require('./analysis.model')(sequelize, Sequelize);
// db.role = require('./role.model')(sequelize, Sequelize);
// db.community = require('./community.model')(sequelize, Sequelize);
// db.color = require('./color.model')(sequelize, Sequelize);
// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId",
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId",
// });
// db.ROLES = ["user", "admin"];
module.exports = db;
