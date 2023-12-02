const httpStatus = require('http-status');
const { trimSeq } = require('../helpers/sequelize');
const db = require('../models');

const { DineInTables, DineInTableGroups } = db;

exports.postDineInTableGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const maxID = await DineInTableGroups.max('TableGroupID');

    await DineInTableGroups.create({
      TableGroupID: Number(maxID) + 1,
      TableGroupName: name,
    });

    return res.status(200).send({
      rescode: httpStatus.CREATED,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};

exports.postDineInTable = async (req, res) => {
  try {
    const { tableName, totalSeat, layoutID, x, y } = req.body;

    const tableKeys = await DineInTables.findAll({
      attributes: ['TableKey'],
      raw: true,
    });
    let maxID = Math.max(...tableKeys.map((item) => Number(item.TableKey)));

    maxID = Number(maxID) + 1;
    if (maxID < 100) {
      maxID = `0${maxID}`;
    }

    await DineInTables.create({
      TableKey: String(maxID),
      TableNo: tableName,
      TotalSeat: totalSeat,
      TableGroupID: layoutID,
      xLeft: x,
      xTop: y,
    });

    return res.status(200).send({
      rescode: httpStatus.CREATED,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};

exports.getDineInTableGroup = async (req, res) => {
  try {
    const dineInTableGroups = await DineInTableGroups.findAll({
      attributes: [
        ['TableGroupID', 'layoutID'],
        [trimSeq('TableGroupName'), 'name'],
        [trimSeq('BgrPicture'), 'layoutImage'],
      ],
    });

    return res.status(200).send({
      rescode: 200,
      data: dineInTableGroups,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};

exports.getDineInTable = async (req, res) => {
  try {
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

    return res.status(200).send({
      rescode: 200,
      data: dineInTables,
    });
  } catch (error) {
    return res.status(500).send({ rescode: 500, message: error.message });
  }
};
