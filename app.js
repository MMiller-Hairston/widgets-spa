// Express for the routing
var express = require("express");

//parses incoming requests
var bodyParser = require("body-parser");

//provides utilities for working with file and directory paths
var path = require("path");

//simplified HTTP request client
var request = require("request");

//Expose the app to express
var app = express();

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse Application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the static files location
app.use(express.static(__dirname + '/components'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/js'));

app.listen(5000, function() {
    console.log('App is running on port 5000!');
});

//Route for the index(dashboard) page
app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
