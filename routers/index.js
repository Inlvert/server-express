const express = require("express");
const { validateUser } = require("../middlewares/validate.mw");
const UserController = require("../controllers/user.controller");
const router = express.Router()

router
  .route("/users")
  .get(UserController.getUsers)
  .post(validateUser, UserController.createUsers);

// app.get("/users", UserController.getUsers);
// app.post("/users", bodyParser, validateUser, UserController.createUsers);

router.get("/user", UserController.getUserQuery);

router
  .route("/users/:userId")
  .delete(UserController.deleteUser)
  .get(UserController.getUser)
  .put(UserController.updateUser);

// app.delete("/users/:userId", UserController.deleteUser);
// app.get("/users/:userId", UserController.getUser);
// app.put("/users/:userId", bodyParser, UserController.updateUser);

module.exports = router;