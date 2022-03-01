const { Schema, model } = require("mongoose");

let validateEmail = function (email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: "Username is required",
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      validate: [validateEmail, "Please provide a valid email"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: true,
    getters: true,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

const User = model("User", userSchema);

module.exports = User;
