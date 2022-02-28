const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const respo_region = require('../controllers/respo_region')

// routes user
router.get('/allRespos', respo_region.getAllRespos)
router.post('/login', respo_region.login)
router.post('/save', respo_region.createRespo)
// router.post('/login', user.login)

module.exports = router;