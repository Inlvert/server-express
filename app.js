const express = require("express");
const { validateUser } = require("./middlewares/validate.mw");

const app = express();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});

const users = [];

// app.get("/", (req, res) => {
//   res.end(`Method is: "${req.method}", path is: "${req.path}"`);
// });

app.get("/users", (req, res) => {
  res.send(users);
});

const bodyParser = express.json();

app.post("/users", bodyParser, validateUser, async (req, res) => {
  const { user } = req;

  user.id = Date.now();

  users.push(user);

  res.send(user); // (req.body)
});