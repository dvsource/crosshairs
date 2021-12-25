const WEAPONS_SOURCE = [];

const getWeapons = (code) => (code ? WEAPONS_SOURCE.filter((_) => _.code === code) : WEAPONS_SOURCE);

const getWeapon = (code) => WEAPONS_SOURCE.find((_) => _.code === code);

const saveWeapon = (weapon) => WEAPONS_SOURCE.push(weapon);

const updateWeapon = (code, weapon) => (WEAPONS_SOURCE[WEAPONS_SOURCE.findIndex((_) => _.code === code)] = weapon);

const deleteWeapon = (code) =>
  WEAPONS_SOURCE.splice(
    WEAPONS_SOURCE.findIndex((_) => _.code === code),
    1
  );

module.exports = { getWeapons, getWeapon, saveWeapon, updateWeapon, deleteWeapon };
