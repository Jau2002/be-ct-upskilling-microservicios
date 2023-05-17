const films = require('../data/films.json');
const CustomError = require('../utils/CustomError');
const response = require('../utils/response');

const getFilms = (_, res) => {
	if (!films) throw new CustomError(404, 'Database is down');
	return response(res, 200, films, 'The response was satisfactory');
};

module.exports = getFilms;
