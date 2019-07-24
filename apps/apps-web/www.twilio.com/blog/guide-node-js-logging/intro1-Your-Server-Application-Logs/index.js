const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  console.log("%O", req);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});
