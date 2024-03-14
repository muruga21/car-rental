const express = require("express");
const { login, signup,displayCars,filterCars,updateCars} = require("../controllers/userController");
const {getCar} = require("../controllers/CarController");
const { checkUser } = require("../middleware/auth");
const router = express.Router();

router.route('/login').post(login)
router.route('/signup').post(signup)
router.route('/display').get( displayCars)
router.route('/filter').post(filterCars)
router.route('/:carid').get(getCar)
router.route('/update').post(updateCars)


module.exports = router;