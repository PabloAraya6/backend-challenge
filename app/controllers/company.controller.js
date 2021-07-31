const {pool} = require('../models/db')

const post = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        let { name, address, country_id, employee_amount } = req.body
        let result = await db.execute('INSERT INTO companies VALUES (null,?,?,?,?)',[country_id,name,address,employee_amount])
        let inserted = await db.execute('SELECT * FROM companies WHERE id = ?',[result[0].insertId])
        data = inserted[0]
        res.status(201).json({message: "success", data: data });
    } catch(error) {
        next(error)
    }
};

module.exports = {post};

