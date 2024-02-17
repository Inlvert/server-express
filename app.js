const express = require("express");
const router = require("./routers/index");
const { ValidationError } = require("yup");
const AplicationError = require("./errors/AplicationError");

const app = express();

app.use(express.json()); // const bodyParser = express.json();\\
app.use("/api", router); // all routers through '/api'
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});

app.get("/users/:userId/message/:messageId", async (req, res, next) => {
  res.send(req.params);
});

app.use(async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).send(err.errors);
  } else if (err instanceof AplicationError) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
});
