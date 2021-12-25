const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');

const { logger, successHandler, errorHandler } = require('./logger');
const swagger = require('./swagger');
const config = require('./config');

const weaponsRoute = require('./routes/weapons-route');

const app = express();

app.use(successHandler);
app.use(errorHandler);

app.use(helmet());
app.use(express.json());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

app.use('/weapons', weaponsRoute);

mongoose
  .connect('mongodb://localhost:27017', {
    user: 'admin',
    pass: 'pass',
    dbName: 'crosshair-test-db',
  })
  .then(() => {
    logger.info(`DB Connected`);
    app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  })
  .catch((e) => console.log(e));
