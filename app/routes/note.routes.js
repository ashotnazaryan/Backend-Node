module.exports = (app, db) => {

  const ref = db.ref('/datasets');
  const cors = require('cors');
  
  app.post('/notes', cors(), (req, res) => {
    ref.once("value")
      .then((snap) => {
        res.send(snap.val());
      });
  });
};