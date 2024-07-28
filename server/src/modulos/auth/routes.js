const express = require('express');

const response = require('../../net/res');
const controller = require('./index');

const router = express.Router();

const login = async (req, res, next) => {
    try {
        const token = await controller.login(req.body.user, req.body.password);
        response.success(req, res, token, 200);
    } catch (error) {
        next(error);
    }
};

router.get('/login', login);

module.exports = router;