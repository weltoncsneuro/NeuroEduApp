// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const questionRoutes = require('./routes/questions');
const newsRoutes = require('./routes/news');

app.use('/api/questions', questionRoutes);
app.use('/api/news', newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
