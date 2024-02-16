const express = require("express");
const router = require("./routers/index");

const app = express();

app.use(express.json()); // const bodyParser = express.json();\\
app.use('/api', router); // all routers through '/api'
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});



app.get("/users/:userId/message/:messageId", async (req, res, next) => {
  res.send(req.params);
});
