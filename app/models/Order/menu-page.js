module.exports = (sequelize, Sequelize) => {
  const MenuPageTable = sequelize.define(
    'Tbl_MenuPage',
    {
      MenuCode: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      MenuName: {
        type: Sequelize.STRING,
      },
      PageCode: {
        type: Sequelize.INTEGER,
      },
      CateCode: {
        type: Sequelize.STRING,
      },
      GroupCode: {
        type: Sequelize.INTEGER,
      },
      BrandCode: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return MenuPageTable;
};
