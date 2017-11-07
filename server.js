const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const api = require('./server/routes/api');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/api', api);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
  console.log("server is up and running on port: " + port);
});
