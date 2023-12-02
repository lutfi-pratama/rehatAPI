const { Sequelize } = require('sequelize');

exports.trimSeq = (colName) => Sequelize.fn('trim', Sequelize.col(colName));
