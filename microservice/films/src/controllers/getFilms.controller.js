const films = require('../data/films.json');

const getFilms = (_, res) => {
	return res.status(200).json(films);
};

module.exports = getFilms;
