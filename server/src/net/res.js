exports.success = function (req, res, messageOK = '', statusCode = 200) {
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: messageOK
    });
}

exports.error = function (req, res, messageError = 'Internal server error', statusCode = 500) {
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: messageError
    });
}