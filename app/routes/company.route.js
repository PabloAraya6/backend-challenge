const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')
const validator = require('../validators/company.validator')

router.get('/', companyController.index)
router.post('/', validator.post, companyController.post)
router.put('/:id', validator.update, companyController.update)
router.get('/:id', validator.exist, companyController.show)
router.delete('/:id', validator.exist, companyController.destroy)
router.post('/seed', validator.seed, companyController.seed)

module.exports = router;
