const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID:
        "971559591567-qd3uaesn1c349mto9fms0603185ctfi5.apps.googleusercontent.com",
      clientSecret: "AybtwAPcfLZAoXmfOhDghfmC"
    },
    async function(accessToken, refreshToken, profile, done) {
      let existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        let newUser = new User({
          name: profile.displayName,
          googleId: profile.id,
          photo: profile.photos[0].value
        });
        try {
          await newUser.save();
          done(null, newUser);
        } catch (e) {
          done(e, null);
        }
      }
    }
  )
);
