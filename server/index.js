const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
const router = require("./router");
const app = express();

//DB setup
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connection is successfull ...."))
  .catch(err => console.log("MongoDB connection error", err));
//App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

//Route all the incoming requests to router
router(app);
//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server is running on :", port);
