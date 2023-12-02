module.exports = (sequelize, Sequelize) => {
  const MenuItemsObj = {
    MenuCode: {
      type: Sequelize.STRING(10), // Mengasumsikan 10 karakter untuk MenuCode
      primaryKey: true,
    },
    MenuName: {
      type: Sequelize.STRING(50), // Mengasumsikan 50 karakter untuk MenuName
    },
    UpcBarcode: {
      type: Sequelize.STRING(50), // Mengasumsikan 50 karakter untuk UpcBarcode
    },
    PageCode: {
      type: Sequelize.INTEGER,
    },
    CateCode: {
      type: Sequelize.STRING(6), // Mengasumsikan 6 karakter untuk CateCode
    },
    GroupCode: {
      type: Sequelize.INTEGER,
    },
    BrandCode: {
      type: Sequelize.INTEGER,
    },
    SrvLevID: {
      type: Sequelize.INTEGER,
    },
    TaxStatus: {
      type: Sequelize.INTEGER,
    },
    cService: {
      type: Sequelize.BOOLEAN,
    },
    cTax: {
      type: Sequelize.BOOLEAN,
    },
    AllowDisc: {
      type: Sequelize.BOOLEAN,
    },
    Price1: {
      type: Sequelize.FLOAT,
    },
  };

  const MenuItemTable = sequelize.define('Tbl_MenuItem', MenuItemsObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return MenuItemTable;
};
