module.exports = (sequelize, Sequelize) => {
  const MenuPagesObj = {
    PageCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    PageName: {
      type: Sequelize.STRING(50), // Mengasumsikan 50 karakter untuk PageName
      allowNull: false,
    },
    BtnBackColor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    BtnForeColor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    IsModifier: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    SubPageCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Xrows: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xCols: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    IsActive: {
      type: Sequelize.BOOLEAN,
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
    Cno: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xPages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MenuPicture: {
      type: Sequelize.STRING(255), // Mengasumsikan 255 karakter untuk MenuPicture
      allowNull: false,
    },
    NamaFIle: {
      type: Sequelize.STRING(20), // Mengasumsikan 20 karakter untuk NamaFIle
      allowNull: false,
    },
    TitlePages: {
      type: Sequelize.STRING(50), // Mengasumsikan 50 karakter untuk TitlePages
      allowNull: false,
    },
    NextPages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MenuCode: {
      type: Sequelize.STRING(10), // Mengasumsikan 10 karakter untuk MenuCode
      allowNull: false,
    },
  };

  const MenuPagesTable = sequelize.define('Tbl_MenuPages', MenuPagesObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return MenuPagesTable;
};
