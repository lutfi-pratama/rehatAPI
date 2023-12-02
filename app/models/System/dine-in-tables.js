module.exports = (sequelize, Sequelize) => {
  const DineInTablesObj = {
    TableKey: {
      type: Sequelize.STRING(6),
      allowNull: false,
      primaryKey: true,
    },
    TableNo: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
    TotalSeat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    TableGroupID: {
      type: Sequelize.STRING(1),
      allowNull: false,
    },
    PictureName: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    xLeft: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xTop: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xHeight: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xWidth: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  };

  const DineinTableTbl = sequelize.define('Tbl_DineInTables', DineInTablesObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return DineinTableTbl;
};
