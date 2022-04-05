// Todos os dados importantes para verificação de eligibilidade
const accpetedMin = { monofasico: 400, bifasico: 500, trifasico: 750 };
const notEligibleMsgs = {
  consClass: 'Classe de consumo não aceita',
  tariffMod: 'Modalidade tarifária não aceita',
  connectionType: 'Consumo muito baixo para tipo de conexão',
  notEligibleSubClass: 'Subclasse de consumo não aceita',
  invalidSubClass: 'Subclasse de consumo inválida',
  notFromClass: 'Subclasse de consumo não pertence a classe de consumo',
};
const accepted = [
  'residencial',
  'industrial',
  'comercial',
  'convencional',
  'branca',
];
const avgCO2gen = 0.084; // 84KG CO2 / 1000kWh

const allSubClass = [
  'administracaoCondominial',
  'agropecuariaRural',
  'baixaRenda',
  'comercial',
  'industrial',
  'poderPublicoEstadual',
  'poderPublicoMunicipal',
  'residencial',
  'servicosDeTelecomunicacao',
  'servicosDeTransporte',
  'templosReligiosos',
];

const eligiblePerClass = {
  comercial: {
    elegiveis: [
      'administracaoCondominial',
      'comercial',
      'servicosDeTelecomunicacao',
      'servicosDeTransporte',
    ],
    naoElegiveis: ['templosReligiosos'],
  },
  industrial: {
    elegiveis: ['industrial'],
    naoElegiveis: [],
  },
  residencial: {
    elegiveis: ['residencial'],
    naoElegiveis: ['baixaRenda'],
  },
  poderPublico: {
    elegiveis: [],
    naoElegiveis: ['poderPublicoEstadual', 'poderPublicoMunicipal'],
  },
  rural: {
    elegiveis: [],
    naoElegiveis: ['agropecuariaRural'],
  },
};

module.exports = {
  eligiblePerClass,
  allSubClass,
  accpetedMin,
  notEligibleMsgs,
  accepted,
  avgCO2gen,
};
