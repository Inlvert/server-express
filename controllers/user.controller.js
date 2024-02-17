const { User } = require("../models");
const createHttpError = require('http-errors');

module.exports.createUsers = async (req, res) => {
  try {
    const { user: userData } = req;

    const user = await User.create(userData);

    res.send(user); // (req.body)
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findByid(+userId);

    if(!user) {
      const error = createHttpError(404, 'where is user?');
      return next(error);
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.getUserQuery = async (req, res, next) => {
  try {
    const {
      query: { id },
    } = req;

    const user = await User.findByid(+id);

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const deleteUser = await User.deleteById(+userId);

    res.send(deleteUser);
    console.log(deleteUser);
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    const updatedUser = await User.updateById(+userId, body);

    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};
