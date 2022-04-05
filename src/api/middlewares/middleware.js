// Middleware para verificação do número do documento e para o historico de consumo
const { cpf, cnpj } = require('cpf-cnpj-validator');

module.exports = (req, _res, next) => {
  const { numeroDoDocumento, historicoDeConsumo } = req.body;
  const correctSize = historicoDeConsumo.length >= 3 && historicoDeConsumo.length <= 12;
  if (numeroDoDocumento.length === 11) {
    if (!cpf.isValid(numeroDoDocumento)) {
      return next({ code: 400, error: 'CPF inválido' });
    }
  }
  if (numeroDoDocumento.length === 13) {
    if (!cnpj.isValid(numeroDoDocumento)) {
      return next({ code: 400, error: 'CNPJ inválido' });
    }
  }
  if (!correctSize) {
    return next({ code: 400, error: 'Bad Request' });
  }
  return next();
};
