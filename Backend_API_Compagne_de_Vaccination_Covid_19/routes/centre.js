const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const Centre = require('../controllers/centre')

// routes user
router.get('/allCentres', Centre.getAllCenter)


module.exports = router;