// @packages
const express = require('express');

// @scripts
const hist = require('./hist-controller');
const { ensurePayloadForm } = require('../../middlewares');

// @constants
const router = express.Router();

router.get('/api/v1/hist/opvar', hist.readHistOpvar);
router.post('/api/v1/hist/opvar', ensurePayloadForm(['date', 'lostValue']), hist.createHistOpvar);

// @routes
module.exports = router;
