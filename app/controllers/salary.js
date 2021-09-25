const { pool } = require('../models/db')

const salary = async (req, res, next) => {
    try {
        const query = 'UPDATE employees INNER JOIN countries ON employees.country_id = countries.id INNER JOIN continents ON countries.continent_id = continents.id SET salary = (1 + (anual_adjustment) / 100) * salary WHERE salary <= 5000;'
        const result = await pool.execute(query)
        let data = ''
        if (result[0].affectedRows == 0) {
            data = 'No salary was updated'
        } else {
            data = `${result[0].affectedRows} salaries were updated`
        }

        res.status(200).json({message:'success - salary updated', data})
    } catch (error) {
        next(error)
    }
}

module.exports = salary