const { body, params } = require('express-validator')
const { pool } = require('../models/db')
const validateFields = require('../middlewares/validation.middleware')

const post = [
    body('name').notEmpty().withMessage('Required field name')
        .isString(),
    body('address').notEmpty().withMessage('Required field address')
        .isString(),
    body('employee_amount').notEmpty().withMessage('Required field employee_amount').isInt(),
    body('country_id').notEmpty().withMessage('Required field country_id')
        .isInt({ min: 1, max: 25}).withMessage('must be integer value'),
    validateFields
]



module.exports = { post }