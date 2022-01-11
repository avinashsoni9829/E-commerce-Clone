const express = require('express');
const { authController } = require('../controllers/userscontrollers');

const router  = express.Router();

router.post("/login",authController);

module.exports = router;

