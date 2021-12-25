const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { logger, successHandler, errorHandler } = require('./logger.js');
const swagger = require('./swagger.js');
const config = require('./config.js');

const weapons = require('./routes/weapons.js');

const app = express();

app.use(successHandler);
app.use(errorHandler);

app.use(helmet());
app.use(express.json());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

app.use('/weapons', weapons);

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});
