const express = require('express');
const winston = require('winston');
const morgan = require('morgan');

const config = {
  env: 'development', // production | development
  port: 3200,
};

// LOGGER - morgan

morgan.token('message', (_, res) => res.locals.errorMessage || '');

const getIpFormat = () => (config.env === 'production' ? ':remote-addr - ' : '');
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;

const errorHandler = morgan(errorResponseFormat, {
  skip: (_, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) },
});

const successHandler = morgan(successResponseFormat, {
  skip: (_, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) },
});

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerJsdocOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/app*.js'], // files containing annotations as above
};

var swaggerUIOoptions = {
  explorer: true,
};

const app = express();

app.use(successHandler);
app.use(errorHandler);

const openapiSpecification = swaggerJsdoc(swaggerJsdocOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification, swaggerUIOoptions));

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

// LOGGER - winston

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: 'info',
  //   format: winston.format.json(),
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }
