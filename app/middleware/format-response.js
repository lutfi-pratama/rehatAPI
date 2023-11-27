function formatResponse(req, res, next) {
  const originalSend = res.send;

  res.send = function (data, status) {
    // Format response
    const formattedResponse = {
      status: status || res.statusCode,
      data,
    };

    // Call the original `res.send`
    originalSend.call(this, formattedResponse);
  };

  // Call the next middleware function
  next();
}

module.exports = formatResponse;
