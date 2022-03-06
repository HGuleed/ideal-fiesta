const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);
router.route("/").post(createThought);

// router
//   .route("/:id")
//   .get(getThoughtById)
//   .put(updateThought)
//   .delete(deleteThought);

module.exports = router;
