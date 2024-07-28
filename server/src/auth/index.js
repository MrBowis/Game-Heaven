const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middlewares/errors');

const secret = config.jwt.secret;

function token(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret);
}

const check = {
    logged: function (req, id) {
        const decoded = decodeHeader(req);
        if (decoded.id !== id) {
            throw error('Don\'t have permissions', 401);
        }
    },
};

function getToken(auth) {
    if (!auth) {
        throw error('No viene token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('Formato invalido', 401);
    }

    let token = auth.replace('Bearer ', '');

    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    token,
    check,
};