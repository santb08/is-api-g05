const { httpCodes } = require('../utils');

/**
 * Verify that every field is inside the body object
 * @param {Array} requireFields array of string which will be the requires keys of request body
 */
function ensurePayloadForm(requiredFields) {
    return (req, res, next) => {
        const { body } = req;

        if (requiredFields.every((field) => body[field])) {
            next();
            return;
        }

        res.status(httpCodes.BAD_REQUEST).send({ message: 'Por favor llene los datos del formulario.' });
    };
}

module.exports = {
    ensurePayloadForm
};
