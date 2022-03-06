const Thought = require("../models/Thought");

const thoughtController = {
  createThought(req, res) {
    console.log(req.body);
    Thought.create(req.body)
      .then((dbThought) => res.json(dbThought))
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },
  getAllThough(req, res) {
    Thought.find({}).select("-__v").sort({ _id: -1 });
  },
};

module.exports = thoughtController;
