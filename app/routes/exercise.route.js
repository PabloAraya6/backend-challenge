const express = require('express');
const router = express.Router();
const shipment = require('../controllers/shipment.controller')
const delivery = require('../controllers/delivery.controller')
// exercise 4
router.post('/apiEnviame', shipment)
// exercise 6
router.get('/delivery-time', delivery)

module.exports = router;
