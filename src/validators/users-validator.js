const Joi = require('joi');

const getUsers = {
  query: Joi.object().keys({
    username: Joi.string(),
    password: Joi.string(),
    email: Joi.string(),
    role: Joi.string(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    username: Joi.string(),
  }),
};

const createUser = {
  body: Joi.object().keys({ username: Joi.string(), password: Joi.string(), email: Joi.string().email() }),
};

const updateUser = {
  ...createUser,
  ...getUser,
};

const deleteUser = {
  ...getUser,
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
