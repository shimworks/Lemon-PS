const request = require('supertest');
const app = require('../../src/app');
const {
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
} = require('../mockData')


describe('All correct data should return', () => {
  it('Succefull response', async () => {
    const response = await request(app)
      .post('/')
      .send(correctData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(goodRes)
  });
});

describe('not eligible data should return', () => {
  it('not eligible by consumption class', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongClass);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badClassRes)
  });
  it('not eligible by tariff modality', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongModality);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badModalityRes)
  });
  it('not eligible by min consumption', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongHistory);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badhistoryRes)
  });
  it('not eligible by all conditions', async () => {
    const response = await request(app)
      .post('/')
      .send(wrongData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(badData)
  });
});

describe('should return error', () => {
  it('with invalid cpf number', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidCPF);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidCPFresp)
  });
    it('with invalid cpf number', async () => {
      const response = await request(app)
        .post('/')
        .send(invalidCNPJ);
      expect(response.status).toBe(400);
      expect(response.body).toEqual(invalidCNPJresp)
    });
  it('with history size 2', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidHistorySizeLow);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidData)
  });
  it('with history size 13', async () => {
    const response = await request(app)
      .post('/')
      .send(invalidHistorySizeHigh);
    expect(response.status).toBe(400);
    expect(response.body).toEqual(invalidData)
  });
});

