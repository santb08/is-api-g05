// @scripts
const buildRiskService = require('./risk.service');
const buildHistService = require('./hist.service');
const { histModel } = require('../models');

const riskService = buildRiskService({
    riskModel: {}
});

const histService = buildHistService({
    histModel
});

module.exports = {
    histService,
    riskService
};
