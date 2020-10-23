// @scripts
const { httpCodes } = require('../../utils');
const { infoService } = require('../../services');

async function readInforms(req, res) {
    try {
        const data = await infoService.getInformes();

        res.status(httpCodes.OK).json({
            data,
            message: 'Informe'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createInforms(req, res) {
    try {
        const data = await infoService.createInform(req.body);

        res.status(httpCodes.CREATED).json({
            data,
            message: 'todo nais'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}
module.exports = {
    readInforms,
    createInforms
};
