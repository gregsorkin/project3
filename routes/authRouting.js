
const authController = require('../controllers/authcontroller.js');

// eslint-disable-next-line func-names
module.exports = function (app, passport) {
  // Signs up a new user
  app.get('/signup', authController.signup);
  // Validates login of new user
  app.get('/login', authController.login);
  app.get('/userPage', isLoggedIn, authController.userPage);
  app.get('/logout', authController.logout);

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/userPage',
      failureRedirect: '/signup',
    }),
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
  }

  app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/userPage',
      failureRedirect: '/login',
    }),
  );
};
