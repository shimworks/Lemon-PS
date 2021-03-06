const correctData = {
  numeroDoDocumento: '35130257651836',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597,
  ],
};
const invalidCPF = {
  numeroDoDocumento: '00000000000',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597,
  ],
};
const invalidCNPJ = {
  numeroDoDocumento: '0000000000000',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597,
  ],
};
const invalidHistorySizeHigh = {
  numeroDoDocumento: '35130257651836',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597,
    4596,
  ],
};
const invalidHistorySizeLow = {
  numeroDoDocumento: '35130257651836',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878,
    9760
  ],
};
const goodRes = {
  elegivel: true,
  economiaAnualDeCO2: 5553.24
}
const wrongClass = {
  numeroDoDocumento: "82536678253",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "rural",
  modalidadeTarifaria: "convencional",
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160
  ]
}
const wrongModality = {
  numeroDoDocumento: "82536678253",
  tipoDeConexao: "bifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160
  ]
}
const wrongHistory = {
  numeroDoDocumento: "82536678253",
  tipoDeConexao: "trifasico",
  classeDeConsumo: "comercial",
  modalidadeTarifaria: "branca",
  historicoDeConsumo: [
    678,
    660,
    576,
    497,
    481,
    631,
    538,
    392,
    659,
    160
  ]
}
const wrongData = {
  numeroDoDocumento: "82536678253",
  tipoDeConexao: "trifasico",
  classeDeConsumo: "rural",
  modalidadeTarifaria: "verde",
  historicoDeConsumo: [
    678,
    660,
    576,
    497,
    481,
    631,
    538,
    392,
    659,
    160
  ]
}
const badClassRes = {
    elegivel: false,
    razoesInelegibilidade: [
      "Classe de consumo n??o aceita",
    ]
}
const badModalityRes = {
  elegivel: false,
  razoesInelegibilidade: [
    "Modalidade tarif??ria n??o aceita",
  ]
}
const badhistoryRes = {
  elegivel: false,
  razoesInelegibilidade: [
    "Consumo muito baixo para tipo de conex??o",
  ]
}
const badData = {
  elegivel: false,
  razoesInelegibilidade: [
    "Classe de consumo n??o aceita",
    "Modalidade tarif??ria n??o aceita",
    "Consumo muito baixo para tipo de conex??o"
  ]
}
const invalidData = {
  error: "Bad Request"
}
const invalidCPFresp = {
  error: "CPF inv??lido"
}
const invalidCNPJresp = {
  error: "CNPJ inv??lido"
}

module.exports = {
  correctData,
  invalidCPF,
  invalidCNPJ,
  invalidCPFresp,
  invalidCNPJresp,
  invalidHistorySizeHigh,
  invalidHistorySizeLow,
  goodRes,
  wrongClass,
  wrongModality,
  wrongHistory,
  wrongData,
  badClassRes,
  badModalityRes,
  badhistoryRes,
  badData,
  invalidData
}