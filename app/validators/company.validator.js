const { body, param } = require('express-validator')
const { pool } = require('../models/db')
const validateFields = require('../middlewares/validation.middleware')

const validCompany = async (id) => {
    const db = await pool.getConnection()
    const result = await db.execute('SELECT * FROM companies WHERE id=?',[id])
    if(result[0] == 0) throw Error('company id not exist')
}

const post = [
    body('name').notEmpty().withMessage('Required field name')
        .isString().isLength({max:60}).withMessage('must be string value with 60 chars max'),
    body('address').notEmpty().withMessage('Required field address')
        .isString().isLength({max:60}).withMessage('must be string value with 60 chars max'),
    body('employee_amount').notEmpty().withMessage('Required field employee_amount')
        .isInt().withMessage('must be integer value '),
    body('country_id').notEmpty().withMessage('Required field country_id')
        .isInt({ min: 1, max: 25}).withMessage('must be integer value between 1 - 25'),
    validateFields
]

const update = [
    param('id').custom(validCompany),
    body('name').isString().isLength({max:60}).withMessage('must be string value with 60 chars max'),
    body('address').isString().isLength({max:60}).withMessage('must be string value with 60 chars max'),
    body('employee_amount').isInt().isLength().withMessage('must be integer value max 11'),
    body('country_id').isInt({ min: 1, max: 25}).withMessage('must be integer value between 1 - 25'),
    validateFields
]

const exist = [
    param('id').custom(validCompany),
    validateFields
]

const seed = [
    param('n').notEmpty().withMessage('n required to insert fake records in companies table')
]

module.exports = { post, update, exist, seed }