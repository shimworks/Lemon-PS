const { notEligibleMsgs, accepted } = require('../../helpers/schemes');
const {
  minConsumption, getCO2Consumption, avgCalculator, enTranslator,
} = require('../../helpers/functions');

const checkEligibility = (ptData) => { // verifica eligibilidade
  // troca os nomes dos campos para manter o código em ingles
  const {
    consHistory, docNum, connectionType, ...clientData
  } = enTranslator(ptData);

  // calcula a média de energia consumida
  const avgConsumption = avgCalculator(consHistory, consHistory.length);

  // calcula o consumo anual de CO2 (era para ser a economia anual de CO2)
  const anualCO2Consumption = getCO2Consumption(consHistory);

  // pega os campos para verificação
  const dataKeys = Object.keys(clientData);

  // pega os campos não aceitos
  const notEligibe = dataKeys.filter((key) => !accepted.includes(clientData[key]));

  // verifica se a média consumida é aceita pelo valor mínimo elegível dependendo do tipo de conexão
  if (!minConsumption(avgConsumption, connectionType)) notEligibe.push('connectionType');

  // verifica se há motivos de inegibilidade
  if (notEligibe.length) {
    // cria lista de motivos de ineligibilidade
    const notEligibleReasons = notEligibe.map((key) => notEligibleMsgs[key]);

    // retorna objeto com os dados de inegilbilidade para o controller
    return { code: 200, response: { elegivel: false, razoesInelegibilidade: notEligibleReasons } };
  }
  // retorna objeto com o consumo anual de CO2(economia Anual De CO2) para o controller
  return { code: 200, response: { elegivel: true, economiaAnualDeCO2: anualCO2Consumption } };
};

module.exports = {
  checkEligibility,
};
