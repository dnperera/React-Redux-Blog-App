const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

//Define User Model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

//add on Save Hook to encrypt password before save
userSchema.pre("save", function(next) {
  //get the access to current user model
  const user = this;
  //generate a SALT and run the callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    //Hash (encrypt) the password using salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      //overwrite the user password with encrypted password
      user.password = hash;
      next();
    });
  });
});
//Create the model class
const modelClass = mongoose.model("User", userSchema);

module.exports = modelClass;
