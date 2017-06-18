module.exports = (app, db) => {

  const ref = db.ref('/data/about');
  const cors = require('cors');
  
  app.post('/api/about', cors(), (req, res) => {
    ref.once("value")
      .then((snap) => {
        res.send(snap.val());
      });
  });
};