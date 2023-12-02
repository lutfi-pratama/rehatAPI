module.exports = (sequelize, Sequelize) => {
  const PromoByDepartObj = {
    PromoCode: {
      type: Sequelize.STRING(6), // Mengasumsikan 6 karakter untuk PromoCode
      allowNull: false,
      primaryKey: true,
    },
    GroupCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DiscCode: {
      type: Sequelize.STRING(5), // Mengasumsikan 5 karakter untuk DiscCode
      allowNull: false,
    },
  };

  const PromoByDepartTable = sequelize.define(
    'Tbl_PromoByDepart',
    PromoByDepartObj,
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return PromoByDepartTable;
};
