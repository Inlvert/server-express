const { User } = require("../models");


module.exports.createUsers = async (req, res) => {
  const { user: userData } = req;

  const user = await User.create(userData)

  

  res.send(user); // (req.body)
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};
