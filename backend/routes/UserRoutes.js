const express = require("express");
const {
  registerUser,
  loginUser,
  getSingleUser,
  getAllUsers,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/single-user", getSingleUser);
router.get("/all-users", getAllUsers);

module.exports = router;
