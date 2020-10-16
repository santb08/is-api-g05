// @scripts
const { httpCodes } = require('../../utils');
const { histService } = require('../../services');

async function readHistOpvar(req, res) {
    try {
        const data = await histService.getHistOpvar();

        res.status(httpCodes.OK).json({
            data,
            message: 'Aquí se debe mostrar la pérdida esperada/capital en riesgo medida con el HistOPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createHistOpvar(req, res) {
    try {
        const data = await histService.createHistOpvar(req.body);

        res.status(httpCodes.CREATED).json({
            data,
            message: 'Guardar la perdida esperada/capital en riesgo medida con el HistOPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function updateHistOpvar(req, res) {
    try {
        res.status(httpCodes.UPDATED).json({
            message: 'Actualiza la perdida esperada/capital en riesgo medida con el HistOPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function deleteHistOpvar(req, res) {
    try {
        res.status(httpCodes.DELETED).json({
            message: 'Elimina un dato de la perdida esperada/capital en riesgo medida con el HistOPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function readHistLda(req, res) {
    try {
        res.status(httpCodes.OK).json({
            message: 'Aquí se debe mostrar la pérdida esperada/capital en riesgo medida con el HistLDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createHistLda(req, res) {
    try {
        res.status(httpCodes.CREATED).json({
            message: 'Guardar la perdida esperada/capital en riesgo medida con el HistLDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function updateHistLda(req, res) {
    try {
        res.status(httpCodes.UPDATED).json({
            message: 'Actualiza la perdida esperada/capital en riesgo medida con el HistLDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function deleteHistLda(req, res) {
    try {
        res.status(httpCodes.DELETED).json({
            message: 'Elimina un dato de la perdida esperada/capital en riesgo medida con el HistLDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

module.exports = {
    createHistLda,
    createHistOpvar,
    deleteHistLda,
    deleteHistOpvar,
    readHistLda,
    readHistOpvar,
    updateHistLda,
    updateHistOpvar
};
