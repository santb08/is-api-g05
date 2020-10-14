// @scripts
const buildRiskService = require('./risk.service');

const riskService = buildRiskService({
    riskModel: {}
});

module.exports = {
    riskService
};
