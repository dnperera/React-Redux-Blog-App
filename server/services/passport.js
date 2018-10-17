const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const User = require("../models/User");
const config = require("../config/keys");

//Create local strategy
//specifically tell local strategy to look for email field as username
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  //verify this email and password  with database and then call 'done' with the user if it is correct email and password
  //otherwise ,call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (!user) {
      return done(null, false);
    }
    //compare user entered password with related db password
    user.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      //if there is match
      return done(null, user);
    });
  });
});
//Setup options for JWT strategy
console.log("Header token", ExtractJwt.fromHeader("authorization"));
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
//Tell Passpoer to use  strategies
passport.use(jwtLogin);
passport.use(localLogin);
