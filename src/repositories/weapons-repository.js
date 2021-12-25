const Weapon = require('../domains/weapon');

const saveWeapon = (weapon) => new Weapon(weapon).save();

const findWeapons = (code) => Weapon.find(code ? { code } : code).exec();

const findWeapon = (code) => Weapon.findOne({ code }).exec();

const updateWeapon = (code, weapon) => Weapon.findOneAndReplace({ code }, weapon).exec();

const deleteWeapon = (code) => Weapon.findOneAndDelete({ code }).exec();

module.exports = { findWeapons, findWeapon, saveWeapon, updateWeapon, deleteWeapon };
