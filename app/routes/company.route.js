const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.get('/', companyController.index)
router.post('/', companyController.post)
router.post('/seed', companyController.seed)

module.exports = router;
