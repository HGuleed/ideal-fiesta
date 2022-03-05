const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser);
router.route("/").post(createUser);

// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
