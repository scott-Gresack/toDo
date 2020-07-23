var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
	res.render("index");
});
app.get("/toDo", function(req, res){
	res.render("toDo");
})

app.listen(3000, function(){
	console.log("---SDI TAG MANAGEMENT ???---");
});