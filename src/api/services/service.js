const fields = [
  'numeroDoDocumento',
  'tipoDeConexao',
  'classeDeConsumo',
  'modalidadeTarifaria',
  'historicoDeConsumo',
];
const minConsumption = { monofasico: 400, bifasico: 500, trifasico: 750 };

const acceptedClasses = [
  'residencial',
  'industrial',
  'comercial',
];

const acceptedTariff = [
  'convencional',
  'branca',
];

const avgCO2gen = 0.084;

const checkEligibility = (data) => {
  const consumption = data.historicoDeConsumo;
  const consumClass = acceptedClasses.includes(data.classeDeConsumo);
  const consumTariff = acceptedTariff.includes(data.modalidadeTarifaria);
  const avgConsumption = (
    consumption.reduce((pre, cur) => pre + cur, 0) / consumption.length
  );
  const avgCO2consumption = (avgConsumption * avgCO2gen).toFixed(2);

  if (avgConsumption > minConsumption[data.tipoDeConexao]) {
    return { code: 200, message: true };
  }
  return { code: 400, message: false };
};

module.exports = {
  checkEligibility,
};
