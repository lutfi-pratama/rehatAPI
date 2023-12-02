const { trimSeq } = require('../helpers/sequelize');
const db = require('../models');

const { MenuItems, MenuPages, TenderMedia, Discounts, PromoByDepart, MstChef } =
  db;

exports.getOrdersData = async (req, res) => {
  const menuItems = await MenuItems.findAll({
    attributes: [
      ...Object.keys(MenuItems.rawAttributes),
      trimSeq('MenuName'),
      trimSeq('UpcBarcode'),
      trimSeq('CateCode'),
    ],
  });

  const menuPages = await MenuPages.findAll({
    attributes: [
      ...Object.keys(MenuPages.rawAttributes),
      trimSeq('MenuCode'),
      trimSeq('PageName'),
      trimSeq('TitlePages'),
    ],
  });

  const tenderMedia = await TenderMedia.findAll({
    attributes: [
      ...Object.keys(TenderMedia.rawAttributes),
      trimSeq('SettleCode'),
      trimSeq('TenderName'),
      trimSeq('TenderPicture'),
    ],
  });

  const discount = await Discounts.findAll({
    attributes: [...Object.keys(Discounts.rawAttributes), trimSeq('DiscCode')],
  });

  const promoByDepart = await PromoByDepart.findAll({
    attributes: [
      ...Object.keys(PromoByDepart.rawAttributes),
      trimSeq('PromoCode'),
    ],
  });

  try {
    return res.status(200).send({
      rescode: 200,
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
      rescode: 200,
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
      rescode: 200,
      data: ordersItem,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
