// @packages
const express = require('express');

// @scripts
const monitoring = require('./monitoring.controller');
const { ensurePayloadForm } = require('../../middlewares');

// @constants
const router = express.Router();

router.get('/api/v1/monitoring', monitoring.readMonitoring);
router.post('/api/v1/monitoring', ensurePayloadForm(['date', 'data', 'name']), monitoring.createMonitoring);

// @routes
module.exports = router;
