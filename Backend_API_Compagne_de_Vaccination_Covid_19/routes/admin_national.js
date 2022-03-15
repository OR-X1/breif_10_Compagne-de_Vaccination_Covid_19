const express = require('express');
// const morgan = require('morgan')
const router = express.Router();
const Admin = require('../controllers/admin_national')

// routes user
router.get('/allAdmins', Admin.getAllAdmins)
router.post('/login', Admin.login)
router.post('/save', Admin.createAdmin)
// router.post('/login', user.login)

module.exports = router;