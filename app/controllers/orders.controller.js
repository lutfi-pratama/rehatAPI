const logger = require('../config/logger');
const db = require('../models');

const { MenuItem, MstChef } = db;

exports.getMenuItems = async (req, res) => {
  const menuItems = await MenuItem.findAll();
  try {
    return res.status(200).send({
      rescode: 200,
      data: menuItems,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.postMstChef = async (req, res) => {
  const { chefCode, chefName } = req.body;
  try {
    const chef = await MstChef.create({
      ChefCcode: chefCode,
      ChefName: chefName,
    });
    return res.status(200).send({
      rescode: 200,
      data: chef,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
