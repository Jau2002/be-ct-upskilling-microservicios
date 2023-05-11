const characters = require('../data/characters.json');

const getCharacters = (_, res) => {
	return res.status(200).json(characters);
};

module.exports = getCharacters;
