const express = require('express');

const response = require('../../net/res');
const controller = require('./index');

const security = require('./security');

const router = express.Router();

const findAll = async (req, res, next) => {
    try {
        const users = await controller.findAll();
        response.success(req, res, users, 200);
    } catch (error) {
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const user = await controller.find(req.params.id)
        response.success(req, res, user, 200);
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    try {
        const user = await controller.add(req.body);
        response.success(req, res, 'User has been added', 201)
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const user = await controller.update(req.body);
        response.success(req, res, `User ${req.body.id} updated`, 200);
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const user = await controller.remove(req.params.id);
        response.success(req, res, `User ${req.params.id} eliminated`, 200);
    } catch (error) {
        next(error);
    }
};

router.get('/', findAll);
router.get('/:id', find);
router.post('/', add);
router.put('/', security(), update);
router.delete('/:id', security(), remove);

module.exports = router;