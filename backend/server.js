const express = require("express");
const app = express();
const PORT = 2000;

app.get("/", (req, res) => {
  return res.json({ success: true, message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
