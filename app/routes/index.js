const aboutRoutes = require('./about/about.routes');
const dashboardRoutes = require('./dashboard/dashboard.routes');

module.exports = (app, db) => {
  aboutRoutes(app, db);
  dashboardRoutes(app, db);
  // Other route groups could go here, in the future//
};