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
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbUserData) => {
        // If no User is found send 404
        if (!dbUserData) {
          res.status(404).json({ message: "Invalid User" });
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // update User by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "Invalid User" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete User
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "Invalid User" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
