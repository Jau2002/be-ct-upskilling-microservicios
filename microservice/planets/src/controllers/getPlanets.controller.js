const planets = require('../data/planets.json');
const CustomError = require('../utils/CustomError');
const response = require('../utils/response');

const getPlanets = (_, res) => {
	if (!planets) throw new CustomError(404, 'Database is down');
	return response(res, 200, planets, 'The response was satisfactory');
};

module.exports = getPlanets;
