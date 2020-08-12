const passport = require("passport");

module.exports = {

  getLogin: (req, res) => {
    var isLoginFailed = typeof req.query.login_failed !== "undefined";
    if (isLoginFailed) {
      req.flash("validation_errors", [{ msg: "Login has failed." }]);
    }
    res.render("login.ejs", {
      user: req.user,
    });
  },
  
  postLogin: [
    passport.authenticate("local", { failureRedirect: "/login?login_failed" }),
    (req, res) => {
      res.redirect("/");
    },
  ],
  
  handleLogout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
  
  getFacebookLogin: [passport.authenticate("facebook")],

  handleFacebookLogin: [
    passport.authenticate("facebook", {
      failureRedirect: "/login?login_failed",
    }),
    function (req, res) {
      res.redirect("/");
    },
  ],

  getGoogleLogin: [passport.authenticate("google", { scope: ['profile'] })],

  handleGoogleLogin: [
    passport.authenticate("google", {
      failureRedirect: "/login?login_failed",
    }),
    function (req, res) {
      res.redirect("/");
    },
  ]
  
};
