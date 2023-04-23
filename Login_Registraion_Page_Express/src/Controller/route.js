const express = require("express");
const path = require("path");
const route = express.Router();

//From controller itself accessing the static file that have to serve.
route.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../View/Htmlfiles/home.html"));
});

module.exports = route;
