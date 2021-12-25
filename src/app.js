const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');

const logger = require('./utils/logger');
const morgon = require('./utils/morgon');
const swagger = require('./utils/swagger');
const config = require('./utils/config');
const { errorConverter, errorHandler } = require('./utils/error');

const weaponsRoute = require('./routes/weapons-route');

const app = express();

app.use(morgon.successHandler);
app.use(morgon.errorHandler);

app.use(helmet());
app.use(express.json());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

app.use('/weapons', weaponsRoute);

app.use(errorConverter);
app.use(errorHandler);

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
