const User = require("../models/User");

const userController = {
  createUser(req, res) {
    User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },

  getAllUser(req, res) {
    User.find({})
      // .populate({
      //   path: "thoughts",
      //   select: "-__v",
      // })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },
};

module.exports = userController;
