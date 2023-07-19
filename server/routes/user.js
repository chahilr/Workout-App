// controller functions
const { signUpUser, loginUser } = require('../controllers/userController');

const express = require('express');

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signUpUser);

module.exports = router;
