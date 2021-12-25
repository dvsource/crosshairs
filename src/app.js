const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { logger, successHandler, errorHandler } = require('./logger.js');
const swagger = require('./swagger.js');
const config = require('./config.js');

const app = express();

app.use(successHandler);
app.use(errorHandler);

app.use(helmet());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

/**
 * @openapi
 * /test:
 *   get:
 *     description: Testing an route
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/test', (_, res) => res.send('Hello World!'));

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});
