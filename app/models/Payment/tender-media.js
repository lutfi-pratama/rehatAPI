module.exports = (sequelize, Sequelize) => {
  const TenderMediaObj = {
    SettleCode: {
      type: Sequelize.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    TenderName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    PaidType: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    TenderPicture: {
      type: Sequelize.STRING(100),
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
      type: Sequelize.STRING(15),
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
      type: Sequelize.STRING(15),
      allowNull: false,
    },
  };

  const TenderMediaTable = sequelize.define('Tbl_TenderMedia', TenderMediaObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return TenderMediaTable;
};
