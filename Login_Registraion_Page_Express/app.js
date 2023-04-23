const express = require("express");
const path  = require("path");
const mongoose = require("mongoose");

//contecting MongoDB ATlas
const DB = "mongodb+srv://shantanu19nagarro:Shan1234@logindb.lm4a4fh.mongodb.net/samplemongoDb?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
  console.log(`connection with database is sucess!`);
}).catch((err)=>{
  console.log(`error occured in connection with DB! ${err}`);
})


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

