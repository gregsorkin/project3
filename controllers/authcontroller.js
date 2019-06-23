// Assign: Gino
// Template for controller, affected by passport

const signup = function (req, res) {
    res.render('signup');
};

const login = function (req, res) {
    res.render('login');
};

const userPage = function (req, res) {
    console.log(req);
    res.render('userPage', req.user);
};

const logout = function (req, res) {
    req.session.destroy((err) => {
        res.redirect('/');
    });
};

module.exports = {
    signup,
    login,
    userPage,
    logout,
};

