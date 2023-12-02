const { trimSeq } = require('../helpers/sequelize');
const db = require('../models');

const { DineInTables, DineInTableGroups } = db;

exports.postDineInTableGroup = async (req, res) => {
  try {
    return res.status(200).send({
      rescode: 200,
      data: {},
    });
  } catch (error) {
    return res.status(500).send({ rescode: 200, message: error.message });
  }
};

exports.postDineInTable = async (req, res) => {
  try {
    return res.status(200).send({
      rescode: 200,
      data: {},
    });
  } catch (error) {
    return res.status(500).send({ rescode: 200, message: error.message });
  }
};

exports.getDineInTableGroup = async (req, res) => {
  const dineInTableGroups = await DineInTableGroups.findAll({
    attributes: [
      ['TableGroupID', 'layoutID'],
      [trimSeq('TableGroupName'), 'name'],
      [trimSeq('BgrPicture'), 'layoutImage'],
    ],
  });

  try {
    return res.status(200).send({
      rescode: 200,
      data: dineInTableGroups,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};

exports.getDineInTable = async (req, res) => {
  const dineInTables = await DineInTables.findAll({
    attributes: [
      ['TableGroupID', 'layoutID'],
      [trimSeq('TableKey'), 'tableID'],
      [trimSeq('TableNo'), 'tableName'],
      ['TotalSeat', 'totalSeat'],
      ['xLeft', 'x'],
      ['xTop', 'y'],
      [trimSeq('PictureName'), 'image'],
    ],
  });

  try {
    return res.status(200).send({
      rescode: 200,
      data: dineInTables,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};
