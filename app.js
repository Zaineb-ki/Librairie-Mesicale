var express = require("express");
var app = express();
 
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(express.static('public'));
 
var path = __dirname + '/public/';
 
var customers = [];

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
  res.sendFile(path + "home.html");
});

app.post("/api/customers/save", function(req,res){
  console.log('Post a Customer: ' + JSON.stringify(req.body));
  var customer = {};
  customer.NOfArtiste = req.body.NOfArtiste;
  customer.UrlP = req.body.UrlP;

  customers.push(customer);
  
  return res.send(customer);
});

app.get("/api/customers/all", function(req,res){
  console.log("Get All Customers");
  return res.send(customers);
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})