// libraries
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config();

const errorMiddleware = require('../middlewares/error.middleware')
// routes
// modelRoutes = require('..')
// configs
const db = require('../models/db')

class Server {
    apiPaths = {
        aboutUs: '/api/about_us',
    }

    constructor(port, app) {
        this.app = app
        this.port = port

        // initial methods
        this.dbConnection()
        this.middlewares()
        this.routes()
        this.app.use(errorMiddleware)
    }

    async dbConnection() {
        try {
            await db.createDB()
            await db.connection()
            await db.seedDB()
        } catch (error) {
            throw error
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors())
        // Helmet
        this.app.use(helmet())
        // Body
        this.app.use(express.json())
        // public folder (just-in-case)
        this.app.use(express.static('public'))
    }

    routes() {
        // this.app.use(this.apiPaths.model, modelRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port)
        })
    }
}

module.exports = Server
