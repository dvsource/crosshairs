const usersService = require('../services/users-service');
const { handleResponse } = require('../utils/response');

const getUsers = (req, res, __) => {
  handleResponse(usersService.getUsers(req.query.username), res);
};

const getUser = (req, res, __) => {
  handleResponse(usersService.getUser(req.params.username), res);
};

const createUser = (req, res, __) => {
  handleResponse(usersService.createUser(req.body), res);
};

const updateUser = (req, res, __) => {
  handleResponse(usersService.updateUser(req.params.username, req.body), res);
};

const deleteUser = (req, res, __) => {
  handleResponse(usersService.deleteUser(req.params.username), res);
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
