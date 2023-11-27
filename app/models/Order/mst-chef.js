module.exports = (sequelize, Sequelize) => {
  const MstChefTbl = sequelize.define(
    'Tbl_MstChef',
    {
      ChefCcode: {
        type: Sequelize.CHAR,
        primaryKey: true,
      },
      ChefName: {
        type: Sequelize.CHAR,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return MstChefTbl;
};
