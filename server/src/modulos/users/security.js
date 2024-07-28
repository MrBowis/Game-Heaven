const auth = require('../../auth');

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        const id = req.body.id;
        auth.check.logged(req, id);
        next();
    }
    return middleware;
}