// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let events = [];

// API endpoints
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.json(newEvent);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
