require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the base Node project',
  });
});

app.listen(PORT, () => {
  console.log('Server running !!');
  console.log('Go to http://localhost:' + PORT);
});
