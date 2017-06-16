const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');
const firebase = require('firebase');
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-service-account.json");

const port = 1234;

admin.initializeApp({
    databaseURL: 'https://gapp-def88.firebaseio.com',
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.database();

require('./app/routes')(app, db); 

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/', (req, res) => {
  res.send('App works!');
});

//git add .   add files stage
//git commit -m "commit message"   commit to local
//git push -u origin   push to origin
//git push heroku master   push to heroku