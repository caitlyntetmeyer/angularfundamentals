var express = require('express');
var app = express();
var http = require('http').Server(app);
// We're building a web server for our application.

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000, function() {
	console.log("The application is listening on port 3000.");
});
