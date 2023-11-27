const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');
const randtoken = require('rand-token');
const db = require('../models');
const config = require('../config/auth.config');
const sendEmail = require('../helpers/sendEmail');
const logger = require('../config/logger');

const { AppUser } = db;
const { Op } = db.Sequelize;

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
        .send({ message: 'User Not found.', rescode: '404' });
    }
    // Checking User Password from DB
    // const passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    //   user.password
    // );
    // if (!passwordIsValid) {
    //   return res.status(401).send({
    //     message: 'Invalid Password!',
    //     rescode: '401',
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
        .send({ message: 'User Not found.', rescode: '404' });
    }
    // Checking User Password from DB
    // const passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    //   user.password
    // );
    // if (!passwordIsValid) {
    //   return res.status(401).send({
    //     message: 'Invalid Password!',
    //     rescode: '401',
    //   });
    // }

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

// exports.signup = async (req, res) => {
//   // Save User to Database
//   try {
//     // upload to GCS
//     const imageUrl = null;

//     // insert to db
//     await AppUser.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 8),
//       image: imageUrl,
//     });

//     res.send({ message: 'Akunmu berhasil dibuat!' });

//     // ? For role checking
//     // if (req.body.roles) {
//     //   const roles = await Role.findAll({
//     //     where: {
//     //       name: {
//     //         [Op.or]: req.body.roles,
//     //       },
//     //     },
//     //   });
//     //   const result = user.setRoles(roles);
//     //   if (result) res.send({ message: 'Akunmu berhasil dibuat!' });
//     // } else {
//     //   // user has role = 1
//     //   const result = user.setRoles([1]);
//     //   if (result) res.send({ message: 'Akunmu berhasil dibuat!' });
//     // }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.signout = async (req, res) => {
//   try {
//     req.session = null;
//     return res.status(200).send({
//       message: 'Kamu telah keluar!',
//       greeting: 'Sampai jumpa lagi...',
//     });
//   } catch (err) {
//     this.next(err);
//   }
// };

// exports.resetPassword = async (req, res) => {
//   try {
//     const dataUser = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     let type = '';
//     let message = '';

//     if (dataUser.email <= 0) {
//       type = 'error';
//       message = 'Email tidak ditemukan';

//       return res.status(402).send({ type, message });
//     }

//     const token = randtoken.generate(20);
//     const sent = sendEmail.sendEmail(dataUser.email, token);
//     dataUser.password = token;

//     if (sent === 0) {
//       type = 'error';
//       message = 'Terjadi kesalahan, coba lagi!';

//       return res.status(403).send({ type, message });
//     }

//     await User.update(
//       {
//         password: dataUser.password,
//       },
//       {
//         where: {
//           email: req.body.email,
//         },
//       }
//     );

//     type = 'success';
//     message = 'Link reset password telah dikirim ke email-mu';

//     return res.status(200).send({ type, message });
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// };

// exports.updatePassword = async (req, res) => {
//   try {
//     const generatedToken = req.body.token; // hidden input
//     const newPassword = req.body.password;

//     const dataUser = await User.findOne({
//       where: {
//         password: generatedToken,
//       },
//     });

//     if (dataUser === null) {
//       return res.status(401).send({
//         message: 'Invalid Token!',
//         rescode: '401',
//       });
//     }

//     const passwordChanged = await User.update(
//       {
//         password: bcrypt.hashSync(newPassword, 8),
//       },
//       {
//         where: {
//           email: dataUser.email,
//         },
//       }
//     );
//     return res.status(200).send({
//       message: 'Password berhasil diganti',
//       rescode: '200',
//     });
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// };
