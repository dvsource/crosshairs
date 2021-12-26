const winston = require('winston');
const config = require('./config');
const Constants = require('./constants');

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

/**
 * @see https://github.com/winstonjs/winston
 */
const logger = winston.createLogger({
  level: Constants.LOGGER.LEVEL.INFO,
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === Constants.ENV.DEVELOPMENT ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      stderrLevels: [Constants.LOGGER.LEVEL.ERROR],
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: Constants.LOGGER.LEVEL.ERROR }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;
