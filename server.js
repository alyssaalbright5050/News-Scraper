//Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
// var db = require('MONGODB_URI');
//Setup our PORT
var PORT = process.env.PORT || 3000;

var app = express();

//Setup an Express Router
var router = express.Router();

//Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";





app.listen(PORT, function(){
  console.log("listening on port" + PORT);
});
