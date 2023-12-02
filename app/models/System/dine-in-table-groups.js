module.exports = (sequelize, Sequelize) => {
  const DineInTableGroupsObj = {
    TableGroupID: {
      type: Sequelize.STRING(1),
      primaryKey: true,
      allowNull: false,
    },
    TableGroupName: {
      type: Sequelize.STRING(30),
    },
    ReveGroup: {
      type: Sequelize.INTEGER,
    },
    BgrPicture: {
      type: Sequelize.STRING(200),
    },
  };

  const DineinTableGroups = sequelize.define(
    'Tbl_DineInTableGroups',
    DineInTableGroupsObj,
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return DineinTableGroups;
};
