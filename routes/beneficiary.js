const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const beneficiary = require('../controllers/beneficiary')

// routes user
router.get('/index', beneficiary.index)
router.post('/store', beneficiary.store)
// router.post('/login', user.login)

module.exports = router;