// Middleware para retorno de erros tratados e não tratados
module.exports = (err, _req, res, _next) => {
  const { code, error } = err;
  if (error) return res.status(code).json({ error });
  return res.status(500).json({ error: 'Internal Server Error' });
};
