// @scripts
const buildRiskService = require('./risk.service');
const buildHistService = require('./hist.service');
const buildInfoService = require('./inf.service');
const { histModel, infoModel } = require('../models');

const riskService = buildRiskService({
    riskModel: {}
});

const histService = buildHistService({
    histModel
});

const infoService = buildInfoService({
    infoModel
});

module.exports = {
    histService,
    riskService,
    infoService
};
