module.exports = (sequelize, Sequelize) => {
  const MenuItemTable = sequelize.define(
    'Tbl_MenuItem',
    {
      MenuCode: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      MenuName: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return MenuItemTable;
};
