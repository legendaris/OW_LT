var path = require('path');
var express = require('express');
var app = express();

// Serve static files from the public and views directories
app.use("/", express.static(path.join(__dirname, 'src/public')));
app.use("/", express.static(path.join(__dirname, 'src/views')));

// Return index.html on all requests
app.get('*', function(req, res) {
    console.log('Reached');
    res.sendFile('next.html', { root: path.join(__dirname, 'src/views') });
});

// Set up the listening port
var port = process.env.PORT || 3000;

// Launch the app and listen to requests
app.listen(port, function () {
    console.log('App listening on port: ' + port + '!');
});