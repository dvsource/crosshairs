const weaponsService = require('../services/weapons-service');
const { handleResponse } = require('../utils/response');

const getWeapons = (req, res, __) => {
  handleResponse(weaponsService.getWeapons(req.query.code), res);
};

const getWeapon = (req, res, __) => {
  handleResponse(weaponsService.getWeapon(req.params.code), res);
};

const createWeapon = (req, res, __) => {
  handleResponse(weaponsService.createWeapon(req.body), res);
};

const updateWeapon = (req, res, __) => {
  handleResponse(weaponsService.updateWeapon(req.params.code, req.body), res);
};

const deleteWeapon = (req, res, __) => {
  handleResponse(weaponsService.deleteWeapon(req.params.code), res);
};

module.exports = { getWeapons, getWeapon, createWeapon, updateWeapon, deleteWeapon };
