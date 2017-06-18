module.exports = (app, db) => {

  const ref = db.ref('/data/dashboard');
  const cors = require('cors');
  
  app.post('/api/dashboard', cors(), (req, res) => {
    ref.once("value")
      .then((snap) => {
        res.send(snap.val());
      });
  });
};