const express = require("express");
const {signup, uploadCars, viewRentedCars,updateCars} = require('../controllers/AdminController');
const router = express.Router();

router.route('/signup').post(signup)
router.route('/upload').post(uploadCars)
router.route('/update').post(updateCars)
router.route('/viewRentedCars').get(viewRentedCars)

module.exports = router