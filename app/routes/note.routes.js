module.exports = (app, db) => {

  const ref = db.ref('/datasets');
  app.post('/notes', (req, res) => {
    ref.once("value")
      .then((snap) => {
        res.send(snap.val());
      });
  });

};