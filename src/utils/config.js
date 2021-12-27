const path = require('path');
const dotenv = require('dotenv');
const Joi = require('joi');
const Constants = require('./constants');

dotenv.config({ path: path.join(__dirname, '../../.env') });

/**
 * @see https://joi.dev/api/?v=17.5.0#objectkeysschema
 */
const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3200),
    NODE_ENV: Joi.string().valid(Constants.ENV.PRODUCTION, Constants.ENV.DEVELOPMENT).required(),
    MONGODB_URL: Joi.string().uri().required().description('Mongo DB url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(Constants.MESSAGE.SERVER.INVALID_CONFIG(error.message));
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  monogoose: {
    url: envVars.MONGODB_URL,
    options: {
      user: Constants.MONGODB.DEFAULT_ADMIN_USER,
      pass: Constants.MONGODB.DEFAULT_ADMIN_PASS,
      dbName: Constants.MONGODB.DATABASE,
    },
  },
};

module.exports = config;
