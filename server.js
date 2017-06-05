const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 4201;

require('./app/routes')(app, {});  //{} empty object, a database in the future

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/', function (req, res) {
  res.send('App works!');
})


//git add .   add files stage
//git commit -m "commit message"   commit to local
//git push -u origin   push to origin


//git push heroku master   push to heroku