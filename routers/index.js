const express = require("express");
const { validateUser } = require("../middlewares/validate.mw");
const UserController = require("../controllers/user.controller");
const router = express.Router();
const multer  = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', 'public', 'images'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage })

router
  .route("/users")
  .get(UserController.getUsers)
  .post(upload.single('avatar'), validateUser, UserController.createUsers);

// app.get("/users", UserController.getUsers);
// app.post("/users", bodyParser, validateUser, UserController.createUsers);

router.get("/user", UserController.getUserQuery);

router
  .route("/users/:userId")
  .delete(UserController.deleteUser)
  .get(UserController.getUser)
  .put(upload.single('avatar'), UserController.updateUser);

// app.delete("/users/:userId", UserController.deleteUser);
// app.get("/users/:userId", UserController.getUser);
// app.put("/users/:userId", bodyParser, UserController.updateUser);

module.exports = router;