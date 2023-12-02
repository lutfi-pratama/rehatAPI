module.exports = (sequelize, Sequelize) => {
  const TenderMediaObj = {
    SettleCode: {
      type: Sequelize.STRING(5), // Mengasumsikan 5 karakter untuk SettleCode
      allowNull: false,
      primaryKey: true,
    },
    TenderName: {
      type: Sequelize.STRING(30), // Mengasumsikan 30 karakter untuk TenderName
      allowNull: false,
    },
    PaidType: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    TenderPicture: {
      type: Sequelize.STRING(100), // Mengasumsikan 100 karakter untuk TenderPicture
      allowNull: false,
    },
    Mno: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xPages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    CustCode: {
      type: Sequelize.STRING(15), // Mengasumsikan 15 karakter untuk CustCode
      allowNull: false,
    },
    CrLimit: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    Amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    GlAcctNo: {
      type: Sequelize.STRING(15), // Mengasumsikan 15 karakter untuk GlAcctNo
      allowNull: false,
    },
  };

  const TenderMediaTable = sequelize.define('Tbl_TenderMedia', TenderMediaObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return TenderMediaTable;
};
