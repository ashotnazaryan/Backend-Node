const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(process.env.PORT || 4201, function () {
  console.log('App listening on port 4201');
})

//git add .   add files stage
//git commit -m "commit message"   commit to local
//git push -u origin   push to origin


//git push heroku master   push to heroku