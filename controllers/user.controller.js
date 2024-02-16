const { User } = require("../models");

module.exports.createUsers = async (req, res) => {
  const { user: userData } = req;

  const user = await User.create(userData);

  res.send(user); // (req.body)
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.getUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const user = await User.findByid(+userId);

  res.send(user);
};

module.exports.getUserQuery = async (req, res, next) => {
  const {
    query: { id },
  } = req;

  const user = await User.findByid(+id);

  res.send(user);
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const deleteUser = await User.deleteById(+userId);

  res.send(deleteUser);
  console.log(deleteUser);
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  const updatedUser = await User.updateById(+userId, body);

  res.send(updatedUser);
};
