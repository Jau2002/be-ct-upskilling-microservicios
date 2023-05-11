const { Router } = require('express');
const getCharacters = require('../controllers/getCharacters.controller');

const characterRouter = Router();

characterRouter.get('/', getCharacters);

module.exports = characterRouter;
