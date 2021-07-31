const {pool} = require('../models/db')
const companySeeder = require('../models/db')

const index = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        const result = await db.execute('SELECT * FROM companies')
        res.status(200).json({message: "success - index", totalItems: result[0].length, data: result[0]});
    } catch (error) {
        next(error)
    }
}

const post = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        const { name, address, country_id, employee_amount } = req.body
        const result = await db.execute('INSERT INTO companies VALUES (null,?,?,?,?)',[country_id,name,address,employee_amount])
        const inserted = await db.execute('SELECT * FROM companies WHERE id = ?',[result[0].insertId])
        res.status(201).json({message: "success - post", data: inserted[0] });
    } catch(error) {
        next(error)
    }
}


const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const db = await pool.getConnection()
        const updateData = req.body
        const query = "UPDATE companies SET " + Object.keys(updateData).map(key => `${key} = ?`).join(", ") + " WHERE id = ?";
        const parameters = [...Object.values(updateData), id];
        await db.execute(query,parameters)
        const updated= await db.execute('SELECT * FROM companies WHERE id = ?',[id])
        res.status(200).json({message: "success - update", data: updated[0]});
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        const { id } = req.params
        const deleted = await db.execute('SELECT * FROM companies WHERE id = ?',[id])
        await db.execute('DELETE FROM companies where id = ?',[id])
        res.status(200).json({message: "success - delete", data: deleted[0] });
    } catch (error) {
        next(error)
    }
}

const show = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        const { id } = req.params
        const toShow = await db.execute('SELECT * FROM companies WHERE id = ?',[id])
        res.status(200).json({message: "success - show", data: toShow[0] });
    } catch (error) {
        next(error)
    }
}

const seed = async (req, res, next) => {
    try {
        const db = await pool.getConnection()
        const n = req.query.n
        await companySeeder.seedFakeData(n)
        const result = await db.execute('SELECT * FROM companies')
        res.status(200).json({message: "success - seed", totalItems: result[0].length, data: result[0]});
    } catch (error) {
        next(error)
    }
}

module.exports = {index, post, update, destroy, show, seed};

