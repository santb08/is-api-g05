// @scripts
const { httpCodes } = require('../../utils');
const { riskService } = require('../../services');

async function readOpvar(req, res) {
    try {
        const data = await riskService.getOpvar();

        console.log(data);

        res.status(httpCodes.OK).json({
            data,
            message: 'Aquí se debe mostrar la pérdida esperada/capital en riesgo medida con el OPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createOpvar(req, res) {
    try {
        res.status(httpCodes.CREATED).json({
            message: 'Guardar la perdida esperada/capital en riesgo medida con el OPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function updateOpvar(req, res) {
    try {
        res.status(httpCodes.UPDATED).json({
            message: 'Actualiza la perdida esperada/capital en riesgo medida con el OPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function deleteOpvar(req, res) {
    try {
        res.status(httpCodes.DELETED).json({
            message: 'Elimina un dato de la perdida esperada/capital en riesgo medida con el OPVAR'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function readLda(req, res) {
    try {
        res.status(httpCodes.OK).json({ message: 'Aquí se debe mostrar la pérdida esperada/capital en riesgo medida con el LDA' });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function createLda(req, res) {
    try {
        res.status(httpCodes.CREATED).json({
            message: 'Guardar la perdida esperada/capital en riesgo medida con el LDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function updateLda(req, res) {
    try {
        res.status(httpCodes.UPDATED).json({
            message: 'Actualiza la perdida esperada/capital en riesgo medida con el LDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

async function deleteLda(req, res) {
    try {
        res.status(httpCodes.DELETED).json({
            message: 'Elimina un dato de la perdida esperada/capital en riesgo medida con el LDA'
        });
    } catch (error) {
        res.status(httpCodes.SERVER_ERROR).send({ message: error.message });
    }
}

module.exports = {
    createLda,
    createOpvar,
    deleteLda,
    deleteOpvar,
    readLda,
    readOpvar,
    updateLda,
    updateOpvar
};
