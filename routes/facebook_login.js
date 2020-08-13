const passport = require("passport");

module.exports = {
  getFacebookLogin: [passport.authenticate("facebook")],

  handleFacebookLogin: [
    passport.authenticate("facebook", {
      failureRedirect: "/login?login_failed",
    }),
    function (req, res) {
      res.redirect("/");
    },
  ],
};
