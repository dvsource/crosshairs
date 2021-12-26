const usersRepository = require('../repositories/users-repository');

const getUsers = (code = null) => usersRepository.findUsers(code);

const getUser = (code) => usersRepository.findUser(code);

const createUser = (user) => usersRepository.createUser(user);

const updateUser = (code, user) => usersRepository.updateUser(code, user);

const deleteUser = (code) => usersRepository.deleteUser(code);

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
