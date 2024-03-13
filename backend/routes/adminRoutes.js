const express = require("express");
const {signup, uploadCars, viewRentedCars} = require('../controllers/AdminController');
const router = express.Router();

router.route('/signup').post(signup)
router.route('/upload').post(uploadCars)
router.route('/viewRentedCars').get(viewRentedCars)

module.exports = router