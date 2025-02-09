const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hi there, how's it going?"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Board app, listening on PORT ${PORT}`);
});
