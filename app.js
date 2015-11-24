var express = require('express');
var app		= express();

var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');

var port = process.env.PORT || 8081;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// static server
app.use( express.static( __dirname + '/public' ) );

// app router
require('./routes')( app );

app.listen(port);
// console.log('http://localhost:' + port);

// expose app
exports = module.exports = app;
