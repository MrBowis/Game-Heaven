function error( messageError = 'Internal server error', code = 500) {
    let e = new Error(messageError);

    if(code) {
        e.statusCode = code;
    }

    return e;
}

module.exports = error;