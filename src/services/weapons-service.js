const weaponsRepository = require('../repositories/weapons-repository');

const getWeapons = (code = null) => weaponsRepository.findWeapons(code);

const getWeapon = (code) => weaponsRepository.findWeapon(code);

const saveWeapon = (weapon) => weaponsRepository.saveWeapon(weapon);

const updateWeapon = (code, weapon) => weaponsRepository.updateWeapon(code, weapon);

const deleteWeapon = (code) => weaponsRepository.deleteWeapon(code);

module.exports = { getWeapons, getWeapon, saveWeapon, updateWeapon, deleteWeapon };
