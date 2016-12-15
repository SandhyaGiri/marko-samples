#!/usr/bin/env node

require('marko/node-require').install();

require('lasso').configure({
    plugins: [
        'lasso-marko'
    ],
    minify: false,
    bundlingEnabled: false,
    fingerprintsEnabled: false
});

var serveStatic = require('serve-static');

var express = require('express');
var app = express();

app.use('/static', serveStatic(__dirname + '/static'));

app.get('/widgets', require('./src/pages/markowidgets'));

app.get('/', require('./src/pages/home'));

app.listen(8080, function(){
	console.log('listening on port: 8080');
});
