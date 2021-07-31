const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.post('/', companyController.post)

module.exports = router;
