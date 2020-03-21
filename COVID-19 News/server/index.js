var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
require('dotenv').config({ path: 'variables.env' });
var app = express();
var Pusher = require('pusher');

app.use(express.static(__dirname + '/../react-client/dist'));


var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

