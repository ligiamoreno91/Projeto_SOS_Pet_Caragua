const { response } = require("express");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();
app.use(express.json());

//Configurações
//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Template engine
//Handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Public
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  message = "dd";
  res.render("index", { message: message });
});

//Outros
const PORT = 3333;
app.listen(PORT, () => {
  console.log("servidor rodando");
});
