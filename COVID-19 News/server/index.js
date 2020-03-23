var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
require('dotenv').config({ path: 'variables.env' });
var app = express();
//var Pusher = require('pusher');
const axios = require('axios');
const cors = require('cors')

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cors());

app.get('/home', (req, res) => {
    //res.send(req.data)
    // console.log('this is req', req);
    // console.log('this is res', res);
    axios.get('http://newsapi.org/v2/everything?q=corona virus',{headers: { 'X-Api-Key': process.env.NEWS_API_KEY }})
    .then(function(response) {
      res.send(response.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  })





  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });












// var pusher = new Pusher({
//   appId: process.env.PUSHER_APP_ID,
//   key: process.env.PUSHER_APP_KEY,
//   secret: process.env.PUSHER_APP_SECRET,
//   cluster: process.env.PUSHER_APP_CLUSTER,
//   encrypted: true
// });

// pusher.trigger('my-channel', 'my-event', {
//   "message": "hello world"
// });



