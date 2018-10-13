const Authentication = require("./controllers/authentication");
const passport = require("passport");
//load passport authentication setup
require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });

//create helper as a middleware to verify sigin user
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send("You are authenticated !!!!");
  });
  app.post("/signup", Authentication.signup);
  app.post("/signin", requireSignin, Authentication.signIn);
};
