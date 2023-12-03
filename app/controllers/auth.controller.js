const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const db = require('../models');
const config = require('../config/auth.config');

const { AppUser } = db;

exports.login = async (req, res) => {
  const { userName } = req.body;
  try {
    const user = await AppUser.findOne({
      where: {
        UserName: userName,
      },
    });
    if (!user) {
      return res
        .status(404)
        .send({ message: 'User Not found.', status: '404' });
    }
    // Checking User Password from DB
    // const passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    //   user.password
    // );
    // if (!passwordIsValid) {
    //   return res.status(401).send({
    //     message: 'Invalid Password!',
    //     status: '401',
    //   });
    // }

    const token = jwt.sign({ id: user.USER_ID }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;
    return res.status(httpStatus[200]).send({
      id: user.id,
      token,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.loginPIN = async (req, res) => {
  const { pin } = req.body;
  try {
    const user = await AppUser.findOne({
      where: {
        PinCode: pin,
      },
    });
    if (!user) {
      return res
        .status(404)
        .send({ message: 'User Not found.', status: '404' });
    }

    const token = jwt.sign({ id: user.USER_ID }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;
    return res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      data: {
        id: user.USER_ID,
        token,
      },
    });
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({ message: error.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      });
    }
    return res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: 'Logout Success',
    });
  });
};
