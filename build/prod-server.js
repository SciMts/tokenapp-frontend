var path = require('path');
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var express = require('express')
var app = express()

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

var server = app.listen(8080)
console.log('Started');
