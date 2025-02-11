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

const link = { href: "/new", text: "NewMessage" };

indexRouter.get("/", (req, res) => res.render("index", { messages: messages, link: link }));

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];

  if (!message) {
    return res.status(404).send("Message not found!!");
  }
  res.render("message", { message });
});

indexRouter.post("/new", (req, res) => {
  console.log(req.body);

  messages.push({ user: req.body.userText, text: req.body.messageText, added: new Date() });

  res.redirect("/");
});

module.exports = indexRouter;
