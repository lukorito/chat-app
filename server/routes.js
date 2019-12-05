const router = require("express").Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/"
  }),
  function(req, res) {
    return res.redirect("/chat");
  }
);

module.exports = router;
