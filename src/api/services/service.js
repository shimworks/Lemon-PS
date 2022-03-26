const { notEligibleMsgs, accepted } = require('../../helpers/schemes');
const {
  minConsumption, getCO2Consumption, avgCalculator, enTranslator,
} = require('../../helpers/functions');

const checkEligibility = (ptData) => {
  const {
    consHistory, docNum, connectionType, ...clientData
  } = enTranslator(ptData);

  const avgConsumption = avgCalculator(consHistory, consHistory.length);
  const anualCO2Consumption = getCO2Consumption(consHistory);
  const dataKeys = Object.keys(clientData);
  const notEligibe = dataKeys.filter((key) => !accepted.includes(clientData[key]));

  if (!minConsumption(avgConsumption, connectionType)) notEligibe.push(connectionType);
  const notEligibleReasons = notEligibe.map((key) => notEligibleMsgs[key]);

  if (notEligibleReasons.length) {
    return { code: 200, response: { elegivel: false, razoesInelegibilidade: notEligibleReasons } };
  }
  return { code: 200, response: { elegivel: true, economiaAnualDeCO2: anualCO2Consumption } };
};

//! fazer verificação de CPF/CNPJ e verificar tamanho minimo e maximo do historico de consumo

module.exports = {
  checkEligibility,
};
