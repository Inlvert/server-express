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

module.exports.deleteUser = async (req, res) => {
  const {
    params: { userId },
  } = req;

  const deletedUser = await User.deleteById(+userId);

  res.send(deletedUser);
};

module.exports.updateUser = async (req, res) => {
  const {
    params: { userId },
    body
  } = req;

  const updatedUser = await User.updateById(+userId, body);

  res.send(updatedUser);
};
