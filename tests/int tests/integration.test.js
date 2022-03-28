const request = require('supertest');
const app = require('../../src/app');

const correctData = {
  numeroDoDocumento: '14041737706',
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
const invalidDoc = {
  numeroDoDocumento: '140417377061',
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
  numeroDoDocumento: '140417377061',
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
  numeroDoDocumento: '140417377061',
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
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
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
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
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
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "trifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "branca",
  "historicoDeConsumo": [
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
  numeroDoDocumento: "14041737706",
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
    "elegivel": false,
    "razoesInelegibilidade": [
      "Classe de consumo não aceita",
    ]
}
const badModalityRes = {
  "elegivel": false,
  "razoesInelegibilidade": [
    "Modalidade tarifária não aceita",
  ]
}
const badhistoryRes = {
  "elegivel": false,
  "razoesInelegibilidade": [
    "Consumo muito baixo para tipo de conexão",
  ]
}
const badData = {
  elegivel: false,
  razoesInelegibilidade: [
    "Classe de consumo não aceita",
    "Modalidade tarifária não aceita",
    "Consumo muito baixo para tipo de conexão"
  ]
}
const invalidData = {
  error: "Bad Request"
}

describe('succefull response', () => {
  it('All correct data', async () => {
    const response = await request(app)
      .post('/')
      .send(correctData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(goodRes)
  });
});

describe('unsuccessful response, not eligible', () => {
  it('consumption class', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongClass);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badClassRes)
  });
  it('tariff modality', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongModality);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badModalityRes)
  });
  it('min consumption', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongHistory);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badhistoryRes)
    console.log(response.body)
  });
  it('All data', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badData)
    console.log(response.body)
  });
});

describe('invalid input', () => {
  it('doc number', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidDoc);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidData)
  });
  it('history size 2', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidHistorySizeLow);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidData)
  });
  it('history size 13', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidHistorySizeHigh);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidData)
  });
});

