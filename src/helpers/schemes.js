// Todos os dados importantes para verificação de eligibilidade
const accpetedMin = { monofasico: 400, bifasico: 500, trifasico: 750 };
const notEligibleMsgs = {
  consClass: 'Classe de consumo não aceita',
  tariffMod: 'Modalidade tarifária não aceita',
  connectionType: 'Consumo muito baixo para tipo de conexão',
};
const accepted = [
  'residencial',
  'industrial',
  'comercial',
  'convencional',
  'branca',
];
const avgCO2gen = 0.084; // 84KG CO2 / 1000kWh

module.exports = {
  accpetedMin,
  notEligibleMsgs,
  accepted,
  avgCO2gen,
};
