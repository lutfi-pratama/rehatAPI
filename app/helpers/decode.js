const jwtDecode = require('jwt-decode');

exports.decodeJWT = (token) => {
  const decode = jwtDecode(token);

  return decode;
};
