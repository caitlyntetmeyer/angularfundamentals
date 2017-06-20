// This is how we include npm installed modules in the file:
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
// We're building a web server for our application.

/*
Tell node where to find static files, such as our js and css files. 
If your static files (css/js) are in a different directory, add this to the 
end of dirname + '/name of your directory'.
*/
app.use(express.static(__dirname));

// When a request is made to the home root, it will send back index.html.
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// Tell the computer to listen on port 3000 for http requests:
http.listen(process.env.PORT || 3000, function() {
	console.log("The application is listening on port 3000.");
});
