// Variables that need to be required 
// Structure for creating a user name, this need to be updated
// Template for passport OAuth
// Assign: Gino

const bCrypt = require('bcrypt-nodejs');
const passportLocal = require('passport-local');

module.exports = function (passport, user) {
  const User = user;
  const LocalStrategy = passportLocal.Strategy;
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
      },
      (req, username, password, done) => {
        const generateHash = function (password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        User.findOne({
          where: {
            username,
          },
        }).then((user) => {
          if (user) {
            return done(null, false, {
              message: 'Sorry, that username is already taken',
            });
          }
          const userPassword = generateHash(password);

          const data = {
            username,
            password: userPassword,
          };

          User.create(data).then((newUser, created) => {
            if (!newUser) {
              return done(null, false);
            }

            if (newUser) {
              return done(null, newUser);
            }
          });
        });
      },
    ),
  );
  // serialize
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  // LOCAL SIGNIN
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      (req, username, password, done) => {
        const User = user;

        const isValidPassword = function (userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            username,
          },
        })
          .then((user) => {
            if (!user) {
              return done(null, false, {
                message: 'Username does not exist',
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: 'Invalid password.',
              });
            }

            const userinfo = user.get();
            return done(null, userinfo);
          })
          .catch((err) => {
            console.log('Error:', err);

            return done(null, false, {
              message: 'Sorry, something went wrong with your login',
            });
          });
      },
    ),
  );
};
