const { response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log("hello");
});

app.listen(3333);
