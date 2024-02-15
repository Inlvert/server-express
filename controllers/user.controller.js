const users = [];

module.exports.createUsers = async (req, res) => {
  
  const { user } = req;

  user.id = Date.now();

  users.push(user);

  res.send(user); // (req.body)
};




module.exports.getUsers = async (req, res) => {
  res.send(users);
};


