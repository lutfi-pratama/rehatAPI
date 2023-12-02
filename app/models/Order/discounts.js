module.exports = (sequelize, Sequelize) => {
  const DiscountsObj = {
    DiscCode: {
      type: Sequelize.STRING(5), // Assuming 5 characters for DiscCode
      allowNull: false,
      primaryKey: true,
    },
    RegDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    ValidFrom: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    ValidUntil: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    DiscName: {
      type: Sequelize.STRING(30), // Assuming 30 characters for DiscName
      allowNull: false,
    },
    DiscPrc: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    PrcOrAmn: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DiscType: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DiscItems: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    ItemGroups: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    SubTotDisc: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    GroupCode1: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    GroupCode2: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    GroupCode3: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    GroupCode4: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Mon: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Tue: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Wed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Thu: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Fri: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Sat: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    Sun: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    StartingTime: {
      type: Sequelize.STRING(12), // Assuming 12 characters for StartingTime
      allowNull: false,
    },
    EndingTime: {
      type: Sequelize.STRING(12), // Assuming 12 characters for EndingTime
      allowNull: false,
    },
    DeActive: {
      type: Sequelize.BOOLEAN,
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
    IsIncrease: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MinAmount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    MinQty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  };

  const DiscountsTable = sequelize.define('Tbl_Discounts', DiscountsObj, {
    timestamps: false,
    freezeTableName: true,
  });
  return DiscountsTable;
};
