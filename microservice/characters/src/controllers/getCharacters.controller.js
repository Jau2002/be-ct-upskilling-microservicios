const characters = require('../data/characters.json');
const response = require('../utils/response');

const getCharacters = (_, res) =>
	response(res, 200, characters, 'The response was satisfactory');

module.exports = getCharacters;
