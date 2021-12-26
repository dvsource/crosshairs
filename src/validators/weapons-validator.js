const Joi = require('joi');

const getWeapons = {
  query: Joi.object().keys({
    code: Joi.string(),
    name: Joi.string(),
    type: Joi.string(),
    country: Joi.string(),
    caliber: Joi.number(),
    mag: Joi.number(),
  }),
};

const getWeapon = {
  params: Joi.object().keys({
    code: Joi.string(),
  }),
};

const createWeapon = {
  body: Joi.object().keys({
    code: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required().valid('LMG', 'SMG'),
    country: Joi.string(),
    caliber: Joi.number().precision(3).positive(),
    mag: Joi.number().integer().positive(),
  }),
};

const updateWeapon = {
  ...createWeapon,
  ...getWeapon,
};

const deleteWeapon = {
  ...getWeapon,
};

module.exports = {
  getWeapons,
  getWeapon,
  createWeapon,
  updateWeapon,
  deleteWeapon,
};
