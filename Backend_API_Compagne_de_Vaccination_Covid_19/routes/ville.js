const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const Cities = require('../controllers/ville')

// routes user
router.get('/allCities', Cities.getAllCities)
router.post('/createCitie', Cities.createCity)
router.get('/city/:id', Cities.getCity)
router.get('/test/:id', Cities.test)
router.get('/allCitiesInRegion/:region_id', Cities.getAllCitiesInRegion)


module.exports = router;