const axios = require('axios')
const { pool } = require('../models/db')
const env = require('../config/config')
const data = require('../config/bodyData')

const shipmentController = async (req, res, next) => {
    const url = 'https://stage.api.enviame.io/api/s2/v2/companies/401/deliveries'
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'api-key': env.API_KEY
        }
    }

    const db = await pool.getConnection()
    try {
        const resp = await axios.post(url, data, config)
        if (resp.status >= 200 && resp.status < 300) {
            db.execute('INSERT INTO shipments VALUES (null,?,?,?)',[1,resp.status,resp.data])
            res.status(200).json({message: 'shipment created', data: resp.data})
        }
    } catch (error) {
        db.execute('INSERT INTO shipments VALUES (null,?,?,?)',[0,error.response.status, error.response.data])
        res.status(error.response.status).json({ message: `shipment fail - ${error.response.statusText}`, error: error.response.data })
    }
}

module.exports =  shipmentController 