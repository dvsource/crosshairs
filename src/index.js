const mongoose = require('mongoose');

const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');
const Constants = require('./utils/constants');

mongoose
  .connect(config.monogoose.url, config.monogoose.options)
  .then(() => {
    logger.info(Constants.MESSAGE.SERVER.DB_CONNECTED);
    app.listen(config.port, () => {
      logger.info(Constants.MESSAGE.SERVER.SERVER_LISTENING(config.port));
    });
  })
  .catch((e) => console.log(e));
