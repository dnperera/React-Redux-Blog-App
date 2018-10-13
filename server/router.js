const Authentication = require("./controllers/authentication");
const passport = require("passport");
//load passport authentication setup
require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
module.exports = function(app) {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "There ...." });
  });
  app.post("/signup", Authentication.signup);
};
