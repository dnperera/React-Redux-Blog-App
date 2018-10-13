const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const config = require("../config/keys");

//Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};
//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  //check if the user ID in payload exists in the database
  //if it does, call 'done' with user object
  //otherwise ,call 'done' without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});
//Tell Passpoer to use this strategy
passport.use(jwtLogin);
