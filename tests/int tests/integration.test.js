const request = require('supertest');
const app = require('../../src/app');
const {
  correctData,
  invalidDoc,
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

