const passport = require("passport");

module.exports = {
  getGoogleLogin: [passport.authenticate("google", { scope: ["profile"] })],

  handleGoogleLogin: [
    passport.authenticate("google", {
      failureRedirect: "/login?login_failed",
    }),
    function (req, res) {
      res.redirect("/");
    },
  ],
};
