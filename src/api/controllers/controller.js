const services = require('../services/service');
const reqData = require('../../../Requirements/expected'); // Apagar função que mostra os requisitos

const eligibilityHandler = async (req, res) => {
  const data = req.body;
  const result = services.checkEligibility(data);
  res.status(result.code).json(result.response);
};

const requirements = async (_req, res) => { // Apagar função que mostra os requisitos
  res.status(200).json(reqData);
};

module.exports = {
  eligibilityHandler,
  requirements, // Apagar função que mostra os requisitos
};
