require('dotenv').config()
const Server = require('./app/models/server')
const express = require('express');

const server = new Server(process.env.PORT, express())

server.listen()
