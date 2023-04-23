const express = require("express");
const path  = require("path");
const app = express();

const port = 3000;


//making an static folder public
app.use(express.static(path.join(__dirname, "src/View/Cssfiles")));
app.use(express.static(path.join(__dirname, "src/View/Jsfiles")));



//middleware accessing the route folder in controller
const homepage = require(path.join(__dirname,"./src/Controller/route"));
app.use("/", homepage);



//listening of webserver
try {
  app.listen(port, () => {
    console.log(`webserver is live on: http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
}

module.exports = app;