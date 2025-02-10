const { Router } = require("express");

const indexRouter = Router();

const messages = [
  { text: "How's it going??", user: "Henry of Skalitz", added: new Date() },
  { text: "Not bad Henry, not bad!", user: "Hans Capon ", added: new Date() },
  { text: "Could be better", user: "Katherine ", added: new Date() },
  { text: "Let's drink!", user: "Father Godwin ", added: new Date() },
  { text: "Woof!", user: "Mutt ", added: new Date() },
  { text: "What you going to do??", user: "Markvart ", added: new Date() },
  { text: "You'll never get your sword back!", user: "Istvan Toth ", added: new Date() },
  { text: "I'll Avennge him", user: "Erik ", added: new Date() },
];

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  console.log(req.body);

  messages.push({ user: req.body.userText, text: req.body.messageText, added: new Date() });

  res.redirect("/");
});

module.exports = indexRouter;
