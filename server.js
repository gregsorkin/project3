// Assign: Gino, Greg and Trevor
// Note
/*
This is primaruly a template, much of this is updated with our file names (for routing)
Some of the stuff may be confusing, it is needed for Passport and OAuth.
I left Handlebar routing in here for now but it's likely that we wont use it.
*/

require('dotenv').config();
// Express
const express = require('express');
const app = express();
// Session & Passport
const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');
// Database
const db = require('./models');
// Port
const PORT = process.env.PORT || 4500; // Need port number;

// Middleware (app.use)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('main'));

// Passport (app.use) 
app.use(session({ secret: 'my secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars -- if we use them
app.set('views', './views');
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');

// Routing (require)
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
require('./routes/authRoutes')(app, passport);

// Passport (require)
require('./config/passport/passport.js')(passport, db.User);

const syncOptions = { force: false };

// Database interaction; start server
// Note for testing: If running a test, set syncOptions.force to true
// clearing the `testdb`*
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
    app.listen(PORT, () => {
        console.log(
            '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
            PORT,
            PORT,
        );
    });
});

module.exports = app;