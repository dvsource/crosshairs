const httpStatus = require('http-status');
const Joi = require('joi');
const _ = require('lodash');
const ApiError = require('../utils/api-error');

const validate = (schema) => (req, __, next) => {
  const validSchema = _.pick(schema, ['body', 'query', 'params']);
  const object = _.pick(req, _.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((_) => _.message).join(',');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }

  Object.assign(req, value);
  return next();
};

module.exports = validate;
