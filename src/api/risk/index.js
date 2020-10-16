// @packages
const express = require('express');

// @scripts
const risk = require('./risk-controller');
// const { ensurePayloadForm } = require('../../middlewares');

// @constants
const router = express.Router();

// @routes
router.delete('/api/v1/risk/opvar', risk.deleteOpvar);
router.get('/api/v1/risk/opvar', risk.readOpvar);
router.get('/api/v1/risk/opvar', risk.readOpvar);
router.post('/api/v1/risk/opvar', risk.createOpvar);
router.put('/api/v1/risk/opvar', risk.updateOpvar);

router.delete('/api/v1/risk/lda', risk.deleteLda);
router.get('/api/v1/risk/lda', risk.readLda);
router.post('/api/v1/risk/lda', risk.createLda);
router.put('/api/v1/risk/lda', risk.updateLda);

module.exports = router;
