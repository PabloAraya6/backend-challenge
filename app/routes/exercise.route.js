const express = require('express');
const router = express.Router();
const shipment = require('../controllers/shipment')
const delivery = require('../controllers/delivery')
const palindrome = require('../controllers/palindrome')

// exercise 3
router.get('/palindrome', palindrome)
// exercise 4
router.post('/apiEnviame', shipment)
// exercise 6
router.get('/delivery-time', delivery)

module.exports = router;
