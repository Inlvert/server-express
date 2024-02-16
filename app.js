const express = require("express");
const { validateUser } = require("./middlewares/validate.mw");
const UserController = require("./controllers/user.controller");

const app = express();
const router = express.Router()

app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});

const bodyParser = express.json();

router
  .route("/users")
  .get(UserController.getUsers)
  .post(bodyParser, validateUser, UserController.createUsers);

// app.get("/users", UserController.getUsers);
// app.post("/users", bodyParser, validateUser, UserController.createUsers);

router.get("/user", UserController.getUserQuery);

router
  .route("/users/:userId")
  .delete(UserController.deleteUser)
  .get(UserController.getUser)
  .put(bodyParser, UserController.updateUser);

// app.delete("/users/:userId", UserController.deleteUser);
// app.get("/users/:userId", UserController.getUser);
// app.put("/users/:userId", bodyParser, UserController.updateUser);

app.get("/users/:userId/message/:messageId", async (req, res, next) => {
  res.send(req.params);
});
