const express = require("express");
const { login, signup,displayCars,filterCars,updateCars} = require("../controllers/userController");
const {getCar} = require("../controllers/CarController");
const { checkUser } = require("../middleware/auth");
const router = express.Router();

router.route('/login').post(login)
router.route('/signup').post(signup)
router.route('/display').get(checkUser, displayCars)
router.route('/filter').post(checkUser, filterCars)
router.route('/:carid').get(checkUser, getCar)

module.exports = router;