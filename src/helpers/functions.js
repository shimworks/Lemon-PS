const {
  accpetedMin, avgCO2gen,
} = require('./schemes');

const minConsumption = (avgConsumption, consuType) => avgConsumption > accpetedMin[consuType];
const avgCalculator = (values, divider) => values
  .reduce((pre, cur) => pre + cur, 0) / divider;
const getCO2Consumption = (consHistory) => (
  consHistory.reduce((pre, cur) => pre + cur, 0) * avgCO2gen)
  .toFixed(2);

const enTranslator = (ptData) => {
  const {
    historicoDeConsumo: consHistory,
    numeroDoDocumento: docNum,
    tipoDeConexao: connectionType,
    classeDeConsumo: consClass,
    modalidadeTarifaria: tariffMod,
  } = ptData;
  return {
    consHistory,
    docNum,
    connectionType,
    consClass,
    tariffMod,
  };
};

module.exports = {
  minConsumption,
  getCO2Consumption,
  avgCalculator,
  enTranslator,
};
