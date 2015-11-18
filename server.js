var express = require("express"); //"loads" express framework library
var app = express(); //new express app (some magic here)
var http = require('http').Server(app); //http server using app
//what happens with a get request to our server?
app.get('/', function(req, res) {
    //this function is a magical callback
    //req is the request info, response is used to send our funny stuff
    res.send("Hello Chat");
});
//server starts listening to port 9090
http.listen(9090, function() {
    //Another magical callback
    console.log("Magic happens in port 9090");
});
