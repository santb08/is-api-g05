// @scripts
const { httpCodes } = require('../../utils');
const { histService } = require('../../services');

async function readOpvar(req, res) {
    try {
        res.status(httpCodes.OK).json({ message: 'Aquí se debe mostrar la pérdida esperada/capital en riesgo medida con el OPVAR' });
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

module.exports = {
    readOpvar,
    createOpvar,
    updateOpvar,
    deleteOpvar
};
