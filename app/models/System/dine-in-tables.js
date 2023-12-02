module.exports = (sequelize, Sequelize) => {
  const DineInTablesObj = {
    TableKey: {
      type: Sequelize.STRING(6),
      allowNull: false,
      primaryKey: true,
    },
    TableNo: {
      type: Sequelize.STRING(5),
    },
    TotalSeat: {
      type: Sequelize.INTEGER,
    },
    TableGroupID: {
      type: Sequelize.STRING(1),
    },
    PictureName: {
      type: Sequelize.STRING(200),
    },
    xLeft: {
      type: Sequelize.INTEGER,
    },
    xTop: {
      type: Sequelize.INTEGER,
    },
    xHeight: {
      type: Sequelize.INTEGER,
    },
    xWidth: {
      type: Sequelize.INTEGER,
    },
  };

  const DineinTableTbl = sequelize.define('Tbl_DineInTables', DineInTablesObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return DineinTableTbl;
};
