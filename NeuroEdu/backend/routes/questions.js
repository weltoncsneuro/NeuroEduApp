// backend/routes/questions.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, category: 'Cefaleia', text: 'O que é cefaleia tensional?' },
    { id: 2, category: 'Epilepsia', text: 'O que é epilepsia?' }
  ]);
});

router.post('/', (req, res) => {
  const question = req.body;
  res.status(201).json(question);
});

module.exports = router;
