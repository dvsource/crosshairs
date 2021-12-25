const weaponsService = require('../services/weapons-service');

const getWeapons = (req, res, __) => {
  res.json(weaponsService.getWeapons(req.query.code));
};

const getWeapon = (req, res, __) => {
  res.json(weaponsService.getWeapon(req.params.code));
};

const saveWeapon = (req, res, __) => {
  weaponsService.saveWeapon(req.body);
  res.json({ message: 'SUCCESS' });
};

const updateWeapon = (req, res, __) => {
  weaponsService.updateWeapon(req.params.code, req.body);
  res.json({ message: 'SUCCESS' });
};

const deleteWeapon = (req, res, __) => {
  weaponsService.deleteWeapon(req.params.code);
  res.json({ message: 'SUCCESS' });
};

module.exports = { getWeapons, getWeapon, saveWeapon, updateWeapon, deleteWeapon };
