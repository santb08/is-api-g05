// @packages
const express = require('express');

// @scripts
const risk = require('./risk-controller');

// @constants
const router = express.Router();

// @routes
router.delete('/api/v1/risk/opvar', risk.deleteOpvar);
router.get('/api/v1/risk/opvar', risk.readOpvar);
router.post('/api/v1/risk/opvar', risk.createOpvar);

router.delete('/api/v1/risk/lda', risk.deleteLda);
router.get('/api/v1/risk/lda', risk.readLda);
router.post('/api/v1/risk/lda', risk.createLda);

module.exports = router;
