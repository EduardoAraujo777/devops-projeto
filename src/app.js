console.log("INICIOU O ARQUIVO");

const express = require('express');
const app = express();

/**
 * ROTA PRINCIPAL
 * Retorna status da API
 */
app.get('/', (req, res) => {
  res.json({
    status: "ok",
    message: "API DevOps rodando com Docker 🚀",
    version: "1.0.0"
  });
});

/**
 * HEALTH CHECK
 * Usado em sistemas reais pra monitorar se a API está viva
 */
app.get('/health', (req, res) => {
  res.json({
    status: "healthy"
  });
});

/**
 * START SERVER
 */
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 API rodando na porta 3000");
});