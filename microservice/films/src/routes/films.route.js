const { Router } = require('express');
const getFilms = require('../controllers/getFilms.controller');

const filmsRouter = Router();

filmsRouter.get('/', getFilms);

module.exports = filmsRouter;
