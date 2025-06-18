const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

// New route: /info returns JSON with app details
app.get('/info', (req, res) => {
  res.json({
    appName: "My Node API",
    version: "1.0.0",
    description: "A simple Node.js API running on Docker & Kubernetes"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

