const apiRoutes = require('./note.routes');
module.exports = (app, db) => {
  apiRoutes(app, db);
  // Other route groups could go here, in the future//
};