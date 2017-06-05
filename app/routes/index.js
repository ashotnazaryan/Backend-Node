const apiRoutes = require('./note.routes');
module.exports = function(app, db) {
  apiRoutes(app, db);
  // Other route groups could go here, in the future
};