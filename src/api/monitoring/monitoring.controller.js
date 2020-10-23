// @scripts
const { httpCodes } = require('../../utils');

async function readMonitoring(req, res) {
    try {
        res.status(httpCodes.OK).json({
            message: 'Retornar el último monitoreo generado'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createMonitoring(req, res) {
    try {
        res.status(httpCodes.CREATED).json({
            message: 'Guardar nuevo monitoreo'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

module.exports = {
    readMonitoring,
    createMonitoring
};
