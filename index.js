var express = require('express');
var app = express();
var os = require('os');

var hostname = os.hostname() || 'localhost';
var port = parseInt(process.env.PORT , 10) || 3000;
var path = require('path');
var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

console.log("image server running at http://%s:%s", hostname, port);
app.listen(port, hostname);
