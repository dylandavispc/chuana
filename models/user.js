const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");
bcrypt = require("bcrypt");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  email: { type: mongoose.SchemaTypes.Email },
  password: { type: String, default: "" },
  cart: [
    {
      id: { type: String },
      quantity: { type: Number }
    }
  ]
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
