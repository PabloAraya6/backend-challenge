const mysql = require('mysql2/promise')
const config = require('../config/config')
const faker = require('faker')

const pool = mysql.createPool({
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function connection() {
    try {
        const [rows] = await pool.execute('select 1+1 as result;')
        console.log('Testing database.. 🔌')
        console.log('SELECT 1+1:', rows[0].result)
    } catch (error) {
        console.log(error)
    }
}


async function createDB() {
    try {
        await pool.execute(`CREATE DATABASE IF NOT EXISTS ${config.DATABASE_NAME}`)
        const db = await pool.getConnection()
        console.log('Database online! 🚀')

        db.changeUser({ database: config.DATABASE_NAME })

        await db.execute('CREATE TABLE IF NOT EXISTS countries ( id int(10) unsigned NOT NULL AUTO_INCREMENT, continent_id int(11) NOT NULL, name varchar(25) NOT NULL, PRIMARY KEY (id) );')
        await db.execute('CREATE TABLE IF NOT EXISTS continents ( id int(10) unsigned NOT NULL AUTO_INCREMENT, name varchar(25) NOT NULL, anual_adjustment int(11) NOT NULL, PRIMARY KEY (id) );')
        await db.execute('CREATE TABLE IF NOT EXISTS employees ( id int(10) unsigned NOT NULL AUTO_INCREMENT, country_id int(11) NOT NULL, first_name varchar(25) NOT NULL, last_name varchar(25) NOT NULL, salary int(11) NOT NULL, PRIMARY KEY (id) );')
        await db.execute('CREATE TABLE IF NOT EXISTS companies ( id int(10) unsigned NOT NULL AUTO_INCREMENT, country_id int(11) NOT NULL, name varchar(60) NOT NULL, address varchar(60) NOT NULL, employee_amount int(11) NOT NULL, PRIMARY KEY (id) );')
    } catch (error) {
        console.log(error);
    }
}

async function seedDB() {
    try {
        const db = await pool.getConnection()
        db.changeUser({ database: config.DATABASE_NAME })

        const [continents] = await db.execute('SELECT * FROM continents')
        if (continents) await db.execute(`INSERT INTO continents VALUES (null, 'América', 4), (null, 'Europa', 5), (null, 'Asia', 6), (null, 'Oceanía', 6), (null, 'Africa', 5);`)

        const [countries] = await db.execute('SELECT * FROM countries')
        if (countries) await db.execute(`INSERT INTO countries VALUES (null, 1, 'Chile'), (null, 1, 'Argentina'), (null, 1, 'Canadá'), (null, 1, 'Colombia'), (null, 2, 'Alemania'), (null, 2, 'Francia'), (null, 2, 'España'), (null, 2, 'Grecia'), (null, 3, 'India'), (null, 3, 'Japón'), (null, 3, 'Corea del Sur'), (null, 4, 'Australia');`)

        const [employees] = await db.execute('SELECT * FROM employees')
        if (employees) await db.execute(`INSERT INTO employees VALUES (null, 1, 'Pedro', 'Rojas', 2000),(null, 2, 'Luciano', 'Alessandri', 2100),(null, 3, 'John', 'Carter', 3050),(null, 4, 'Alejandra', 'Benavides', 2150),(null, 5, 'Moritz', 'Baring', 6000),(null, 6, 'Thierry', 'Henry', 5900),(null, 7, 'Sergio', 'Ramos', 6200),(null, 8, 'Nikoleta', 'Kyriakopulu', 7000),(null, 9, 'Aamir', 'Khan', 2000),(null, 10, 'Takumi', 'Fujiwara', 5000),(null, 11, 'Heung-min', 'Son', 5100),(null, 12, 'Peter', 'Johnson', 6100);`)

    } catch (error) {
        console.log(error)
    }
}

async function seedFakeData(n) {
    try {
        let i = 0
        const db = await pool.getConnection()
        db.changeUser({ database: config.DATABASE_NAME })

        while (i < n) {
            // set language in spanish
            faker.local = 'es'
            data = {
                country_id: faker.datatype.number({ 'min': 1, 'max': 25 }), // range of countries id's
                name: faker.company.companyName(),
                address: faker.address.streetAddress(),
                employee_amount: faker.datatype.number({ 'min': 45, 'max': 300 }) // number of employees
            }
            
            await db.execute('INSERT INTO companies VALUES (null,?,?,?,?)', [data.country_id, data.name, data.address, data.employee_amount])
            i++
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createDB, seedDB, seedFakeData, connection, pool }