module.exports = (app, db) => {

  const ref = db.ref('/data');
  const cors = require('cors');
  
  app.post('/api/notes', cors(), (req, res) => {
    ref.once("value")
      .then((snap) => {
        res.send(snap.val());
      });
  });
};