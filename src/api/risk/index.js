// @packages
const express = require('express');

// @scripts
const risk = require('./risk-controller');
// const { ensurePayloadForm } = require('../../middlewares');

// @constants
const router = express.Router();

// @routes
//Elimina una medición realizada con el OpVar
router.delete('/api/v1/risk/opvar', risk.deleteOpvar);
//Obtirnr una medición realizada con el OpVar
router.get('/api/v1/risk/opvar', risk.readOpvar);
//Crea una nueva estimación con el OpVar
router.post('/api/v1/risk/opvar', risk.createOpvar);

//Elimina una medición realizada con el LDA
router.delete('/api/v1/risk/lda', risk.deleteLda);
//Obtirnr una medición realizada con el LDA
router.get('/api/v1/risk/lda', risk.readLda);
//Crea una nueva estimación con el LDA
router.post('/api/v1/risk/lda', risk.createLda);

module.exports = router;
