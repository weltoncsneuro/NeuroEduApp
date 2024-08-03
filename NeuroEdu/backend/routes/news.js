// backend/routes/news.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Novo tratamento para cefaleia', content: 'Detalhes sobre o novo tratamento...' },
    { id: 2, title: 'Estudos recentes sobre epilepsia', content: 'Informações sobre os estudos...' }
  ]);
});

router.post('/', (req, res) => {
  const news = req.body;
  res.status(201).json(news);
});

module.exports = router;
