const jwt = require("jwt-simple");
const User = require("../models/User");
const { secret } = require("../config/keys");

//Generate jwt token for given user
function tokenForValidUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(422).json({ error: "Email and password must provide." });
  }

  //check wheather user already exist for given user
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    //if the email exist return error
    if (existingUser) {
      return res.status(422).json({ error: "Email is already registered !." });
    }

    //if the email is new , create new user record
    const user = new User({ email: email, password: password });
    user.save(function(err, newUser) {
      if (err) {
        return next(err);
      }
      //Respond to the request indicating the user was created
      res.json({ token: tokenForValidUser(user) });
    });
  });
};
