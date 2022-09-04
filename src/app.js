const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const users = require('./routes/userRoutes');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`\n\nApp running at http://localhost:${port}\n\n`);
});

// ROUTES
users(app);

app.use((req, res, next) => {
  res.send({ success: false, message: 'Not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});

console.clear();

module.exports = { app };
