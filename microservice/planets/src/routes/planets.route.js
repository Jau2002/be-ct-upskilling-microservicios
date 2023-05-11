const { Router } = require('express');
const getPlanets = require('../controllers/getPlanets.controller');

const planetsRouter = Router();

planetsRouter.get('/', getPlanets);

module.exports = planetsRouter;
