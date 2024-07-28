const response = require('./res');

function error(message, code) {
    console.error('[error]', message);
    const messageError = message || 'Internal server error';
    const statusCode = code || 500;

    response.error(req, res, messageError, statusCode);
}

module.exports = error;