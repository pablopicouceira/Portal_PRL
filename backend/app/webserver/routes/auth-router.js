'use strict';

const express = require('express');
const login = require('../controllers/auth/auth-login-controller');

const router = express.Router();

router.post('/auth', login);

module.exports = router;
