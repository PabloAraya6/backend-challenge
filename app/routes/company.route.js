const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller')

router.get('/', companyController.index)
router.post('/', companyController.post)
router.put('/:id', companyController.update)
router.get('/:id', companyController.show)
router.delete('/:id', companyController.destroy)
router.post('/seed', companyController.seed)

module.exports = router;
