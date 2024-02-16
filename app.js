const express = require("express");
const router = require("./routers/index");

const app = express();

app.use(express.json());
app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});

// const bodyParser = express.json();

app.get("/users/:userId/message/:messageId", async (req, res, next) => {
  res.send(req.params);
});
