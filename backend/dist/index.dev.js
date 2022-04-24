"use strict";

var express = require('express');

cosnsole.log('kya chal raha hai bhai');
var app = express();
app.get('/', function (req, resp) {
  resp.send("hellloooo");
});
app.listen(5000);