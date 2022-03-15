const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const Cities = require('../controllers/ville')

// routes user
router.get('/allCities', Cities.getAllCities)


module.exports = router;