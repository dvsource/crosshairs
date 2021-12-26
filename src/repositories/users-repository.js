const User = require('../domains/user');

const createUser = (user) => new User(user).save();

const findUsers = (code) => User.find(code ? { code } : code).exec();

const findUser = (code) => User.findOne({ code }).exec();

const updateUser = (code, user) => User.findOneAndReplace({ code }, user).exec();

const deleteUser = (code) => User.findOneAndDelete({ code }).exec();

module.exports = { findUsers, findUser, createUser, updateUser, deleteUser };
