const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const region = require('../controllers/region')

// routes user
router.get('/allRegions', region.getAllRegions)
router.post('/createRegion', region.createRegion)
router.get('/getRegion', region.getRegion)


module.exports = router;