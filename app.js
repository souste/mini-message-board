const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Hi there, how's it going?"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Board app, listening on PORT ${PORT}`);
});
