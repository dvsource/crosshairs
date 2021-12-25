const weaponsService = require('../services/weapons-service');

const getWeapons = (req, res, __) => {
  weaponsService
    .getWeapons(req.query.code)
    .then((data) => res.json({ data }))
    .catch((e) => res.json({ message: 'ERROR', e }));
};

const getWeapon = (req, res, __) => {
  console.log(req.params);
  weaponsService
    .getWeapon(req.params.code)
    .then((data) => res.json({ data }))
    .catch((e) => res.json({ message: 'ERROR', e }));
};

const saveWeapon = (req, res, __) => {
  weaponsService
    .saveWeapon(req.body)
    .then(() => res.json({ message: 'SUCCESS' }))
    .catch((e) => res.json({ message: 'ERROR', e }));
};

const updateWeapon = (req, res, __) => {
  weaponsService
    .updateWeapon(req.params.code, req.body)
    .then(() => res.json({ message: 'SUCCESS' }))
    .catch((e) => res.json({ message: 'ERROR', e }));
};

const deleteWeapon = (req, res, __) => {
  weaponsService
    .deleteWeapon(req.params.code)
    .then(() => res.json({ message: 'SUCCESS' }))
    .catch((e) => res.json({ message: 'ERROR', e }));
};

module.exports = { getWeapons, getWeapon, saveWeapon, updateWeapon, deleteWeapon };
