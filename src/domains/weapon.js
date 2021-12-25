const mongoose = require('mongoose');

const weaponSchema = mongoose.Schema({
  name: String,
  code: String,
  type: String,
  country: String,
  caliber: Number,
  mag: Number,
});

module.exports = mongoose.model('Weapon', weaponSchema);
