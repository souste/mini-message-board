const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Board app, listening on PORT ${PORT}`);
});
