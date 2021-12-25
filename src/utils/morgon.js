const morgan = require('morgan');
const config = require('./config');
const logger = require('./logger');

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

module.exports = {
  errorHandler,
  successHandler,
};
