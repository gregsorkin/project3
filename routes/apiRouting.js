
const passport = require('passport');
const db = require('../models');

module.exports = function (app) {

  // Get all entries for given user, by ID
  app.get('/api/entries/:id', (req, res) => {
    const { id } = req.params;
    db.Entry.findAll({ where: { UserId: id } }).then((results) => {
      res.json(results);
    });
  });

  // Create a new user entry
  app.post('/api/entries/', (req, res) => {
    db.Entry.create(req.body).then((results) => {
      res.json(results);
    });
  });

};
