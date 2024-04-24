const express = require('express');
const router = express.Router();

const { validateCustomer } = require('../validators/customerValidator');
const { registerCustomer } = require('../controllers/customerController');

router.post('/register', validateCustomer, registerCustomer);

module.exports = router;