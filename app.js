require('dotenv').config()
const Server = require('./app/models/server')
const express = require('express');
const config = require('./app/config/config')

const server = new Server(config.PORT, express())

server.listen()
