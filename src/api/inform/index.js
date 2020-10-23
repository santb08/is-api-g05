// @packages
const express = require('express');

// @scripts
const inform = require('./inf-controller');
const { ensurePayloadForm } = require('../../middlewares');

// @constants
const router = express.Router();

router.get('/api/v1/informs', inform.readInforms)
router.post('/api/v1/informs', inform.createInforms)

module.exports = router