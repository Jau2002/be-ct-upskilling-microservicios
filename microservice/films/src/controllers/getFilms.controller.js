const films = require('../data/films.json');
const response = require('../utils/response');

const getFilms = (_, res) =>
	response(res, 200, films, 'The response was satisfactory');

module.exports = getFilms;
