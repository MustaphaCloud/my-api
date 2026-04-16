const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'healthy' });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Mustapha Nurudeen',
    email: 'mustaphanurudeen488@gmail.com',
    github: 'https://github.com/MustaphaCloud'
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
