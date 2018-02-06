var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var express = require('express')
var app = express()

app.use(express.static('../dist'))

var server = app.listen(80)
