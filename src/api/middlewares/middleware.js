// Middleware para verificação do número do documento e para o historico de consumo
const { cnpj, cpf } = require('../../../Requirements/data');

module.exports = (req, _res, next) => {
  const { numeroDoDocumento, historicoDeConsumo } = req.body;
  const correctSize = historicoDeConsumo.length >= 3 && historicoDeConsumo.length <= 12;
  const validDoc = RegExp(cpf.pattern).test(numeroDoDocumento)
  || RegExp(cnpj.pattern).test(numeroDoDocumento);
  if (!correctSize || !validDoc) {
    return next({ code: 400, error: 'Bad Request' });
  }
  return next();
};
