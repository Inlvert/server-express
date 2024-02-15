const express = require("express");
const { validateUser } = require("./middlewares/validate.mw");
const UserController = require("./controllers/user.controller");

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.end(`Method is: "${req.method}", path is: "${req.path}"`);
// });

app.get("/users", UserController.getUsers);

const bodyParser = express.json();

app.post("/users", bodyParser, validateUser, UserController.createUsers);

app.get("/users", UserController.getUser);