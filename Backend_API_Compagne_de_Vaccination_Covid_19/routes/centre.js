const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const Centre = require('../controllers/centre')

// routes user
router.get('/allCentres', Centre.getAllCenters)
router.get('/center/:id', Centre.getCenter)
router.post('/CreateCenter', Centre.createCenter)


module.exports = router;