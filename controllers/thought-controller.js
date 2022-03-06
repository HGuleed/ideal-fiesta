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
  getAllThought(req, res) {
    Thought.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThought) => res.json(dbThought))
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "Not a valid thought" });
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  updateThought({ params, body }, res) {
    Thought.findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "Invalid thought" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
      });
  },
  deleteThought({ params, body }, res) {
    Thought.findByIdAndDelete({ _id: params.id })
      .then((dbThought) => {
        if (!dbThought) {
          res.status(404).json({ message: "Invalid Thought" });
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json;
      });
  },
};

module.exports = thoughtController;
