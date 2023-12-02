module.exports = (sequelize, Sequelize) => {
  const DineInTableGroupsObj = {
    TableGroupID: {
      type: Sequelize.STRING(1),
      allowNull: false,
      primaryKey: true,
    },
    TableGroupName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    ReveGroup: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    BgrPicture: {
      type: Sequelize.STRING(200),
      allowNull: false,
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
