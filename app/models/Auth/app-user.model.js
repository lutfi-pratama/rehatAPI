module.exports = (sequelize, Sequelize) => {
  const AppUserTbl = sequelize.define(
    'Tbl_AppUser',
    {
      USER_ID: {
        type: Sequelize.CHAR,
        primaryKey: true,
      },
      LoginName: {
        type: Sequelize.CHAR,
      },
      UserName: {
        type: Sequelize.CHAR,
      },
      Cpassword: {
        type: Sequelize.CHAR,
      },
      PinCode: {
        type: Sequelize.CHAR,
      },
      Barcode: {
        type: Sequelize.STRING,
      },
      reg_date: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return AppUserTbl;
};
