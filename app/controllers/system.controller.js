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
      status: httpStatus.CREATED,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

exports.postDineInTable = async (req, res) => {
  const tablesList = req.body;
  try {
    const tableKeys = await DineInTables.findAll({
      attributes: ['TableKey'],
      raw: true,
    });
    let maxID = Math.max(...tableKeys.map((item) => Number(item.TableKey)));

    const tablesListPayload = tablesList.map((table, index) => {
      maxID = Number(maxID) + (index + 1);
      if (maxID < 100) {
        maxID = `0${maxID}`;
      }

      return {
        TableKey: String(maxID),
        TableNo: table.tableName,
        TotalSeat: table.totalSeat,
        TableGroupID: table.layoutID,
        xLeft: table.x,
        xTop: table.y,
      };
    });

    await DineInTables.bulkCreate(tablesListPayload);

    return res.status(200).send({
      status: httpStatus.CREATED,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
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
      status: 200,
      data: dineInTableGroups,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

exports.getDineInTable = async (req, res) => {
  try {
    const dineInTables = await DineInTables.findAll({
      attributes: [
        ['xTop', 'y'],
        ['xLeft', 'x'],
        ['TotalSeat', 'totalSeat'],
        ['TableGroupID', 'layoutID'],
        [trimSeq('TableKey'), 'tableID'],
        [trimSeq('TableNo'), 'tableName'],
        [trimSeq('PictureName'), 'image'],
      ],
    });

    return res.status(200).send({
      status: 200,
      data: dineInTables,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

exports.putDineInTable = async (req, res) => {
  const tableID = req.params.id;
  const { tableName, totalSeat, x, y } = req.body;

  try {
    await DineInTables.update(
      {
        TableNo: tableName,
        TotalSeat: totalSeat,
        xLeft: x,
        xTop: y,
      },
      {
        where: {
          TableKey: tableID,
        },
      }
    );

    return res.status(200).send({
      status: 200,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

exports.deleteDineInTable = async (req, res) => {
  const tableID = req.params.id;

  try {
    await DineInTables.destroy({
      where: {
        TableKey: tableID,
      },
    });

    return res.status(200).send({
      status: 200,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
