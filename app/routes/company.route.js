const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.get('/', companyController.get)

module.exports = router;
