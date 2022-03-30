const services = require('../services/service');

const eligibilityHandler = async (req, res) => {
  const data = req.body;
  const result = services.checkEligibility(data);
  res.status(result.code).json(result.response);
};

module.exports = {
  eligibilityHandler,
};
