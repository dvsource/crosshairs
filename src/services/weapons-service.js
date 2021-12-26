const weaponsRepository = require('../repositories/weapons-repository');

const getWeapons = (code = null) => weaponsRepository.findWeapons(code);

const getWeapon = (code) => weaponsRepository.findWeapon(code);

const createWeapon = (weapon) => weaponsRepository.createWeapon(weapon);

const updateWeapon = (code, weapon) => weaponsRepository.updateWeapon(code, weapon);

const deleteWeapon = (code) => weaponsRepository.deleteWeapon(code);

module.exports = { getWeapons, getWeapon, createWeapon, updateWeapon, deleteWeapon };
