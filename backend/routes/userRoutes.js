const express = require("express");
const { login, signup} = require("../controllers/userController");
const router = express.Router();

router.route('/login').get(login)
router.route('/signup').post(signup)

module.exports = router;