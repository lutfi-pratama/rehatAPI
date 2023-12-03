const lodash = require('lodash');
const { trimSeq, toCamelCase } = require('../helpers/sequelize');
const db = require('../models');

const { MenuItems, MenuPages, TenderMedia, Discounts, PromoByDepart, MstChef } =
  db;

exports.getOrdersData = async (req, res) => {
  const menuItems = await MenuItems.findAll({
    attributes: [
      ...Object.keys(MenuItems.rawAttributes).map((key) => [
        key,
        lodash.camelCase(key),
      ]),
      [trimSeq('MenuName'), 'menuName'],
      [trimSeq('UpcBarcode'), 'upcBarcode'],
      [trimSeq('CateCode'), 'cateCode'],
    ],
  });

  const menuPages = await MenuPages.findAll({
    attributes: [
      ...Object.keys(MenuPages.rawAttributes).map((key) => [
        key,
        lodash.camelCase(key),
      ]),
      [trimSeq('MenuCode'), 'menuCode'],
      [trimSeq('PageName'), 'pageName'],
      [trimSeq('TitlePages'), 'titlePages'],
    ],
  });

  const tenderMedia = await TenderMedia.findAll({
    attributes: [
      ...Object.keys(TenderMedia.rawAttributes).map((key) => [
        key,
        lodash.camelCase(key),
      ]),
      [trimSeq('SettleCode'), 'settleCode'],
      [trimSeq('TenderName'), 'tenderName'],
      [trimSeq('TenderPicture'), 'tenderPicture'],
    ],
  });

  const discount = await Discounts.findAll({
    attributes: [
      ...Object.keys(Discounts.rawAttributes).map((key) => [
        key,
        lodash.camelCase(key),
      ]),
      [trimSeq('DiscCode'), 'discCode'],
    ],
  });

  const promoByDepart = await PromoByDepart.findAll({
    attributes: [
      ...Object.keys(PromoByDepart.rawAttributes).map((key) => [
        key,
        lodash.camelCase(key),
      ]),
      [trimSeq('PromoCode'), 'promoCode'],
    ],
  });

  try {
    return res.status(200).send({
      status: 200,
      data: {
        item: menuItems,
        page: menuPages,
        tenderMedia,
        discount,
        promoByDepart,
      },
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
      status: 200,
      data: chef,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.getOrdersItem = async (req, res) => {
  // page menu

  // menu item

  const { id } = req.query;
  try {
    const ordersItem = await MenuItems.findAll({
      where: {
        id,
      },
    });
    return res.status(200).send({
      status: 200,
      data: ordersItem,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
