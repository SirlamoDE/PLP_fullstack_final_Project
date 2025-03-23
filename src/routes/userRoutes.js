const express = require("express");
const { body } = require("express-validator");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

router.post(
  "/register",
  [
    body("username").isLength({ min: 4 }).withMessage("Username must be at least 4 characters."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters."),
  ],
  registerUser
);

module.exports = router;
