const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.post('/', companyController.post)
router.post('/seed', companyController.seed)

module.exports = router;
