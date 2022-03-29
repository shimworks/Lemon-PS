const {
  minConsumption, getCO2Consumption, avgCalculator, enTranslator,
} = require('../../src/helpers/functions');

const consHistory = [
  100,200,300,400,500,600,700,800,900,1000,
]
describe('The function', () => {
  it('"avgCalculator" should return the average value', () => {
    const avgConsumption = avgCalculator(consHistory, consHistory.length);
    expect(avgConsumption).toBe(550);
  });

  it('"getCO2Consumption" should return the CO2 consumption', () => {
    const CO2consumption = getCO2Consumption(consHistory);
    expect(CO2consumption).toBe(462);
  });
})

describe('"minConsumption" should return', () => {
  it('"true" if the average consumption is higher than the minimum for "monofasico"', () => {
    expect(minConsumption(401, "monofasico")).toBe(true);
  });
  it('"false" if the average consumption is lower than the minimum for "monofasico"', () => {
    expect(minConsumption(400, "monofasico")).toBe(false);
  });
  it('"true" if the average consumption is higher than the minimum for "bifasico"', () => {
    expect(minConsumption(501, "bifasico")).toBe(true);
  });
  it('"false" if the average consumption is lower than the minimum for "bifasico"', () => {
    expect(minConsumption(500, "bifasico")).toBe(false);
  });
  it('"true" if the average consumption is higher than the minimum for "trifasico"', () => {
    expect(minConsumption(751, "trifasico")).toBe(true);
  });
  it('"false" if the average consumption is lower than the minimum for "trifasico"', () => {
    expect(minConsumption(750, "trifasico")).toBe(false);
  });
})