const characters = require('../data/characters.json');
const CustomError = require('../utils/CustomError');
const response = require('../utils/response');

const getCharacters = (_, res) => {
	if (!characters) throw new CustomError(404, 'Database is down');
	return response(res, 200, characters, 'The response was satisfactory');
};
module.exports = getCharacters;
