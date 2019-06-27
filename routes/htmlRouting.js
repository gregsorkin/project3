
const db = require('../models');

module.exports = function (app) {
    // Load index page
    app.get('/', (req, res) => {
        res.redirect('/login');
    });

    app.get('/users/:username', (req, res) => {
        const { username } = req.params;
        db.User.findOne({ where: { username } }).then((results) => {
            res.redirect('/userPage');
        });
    });

};
