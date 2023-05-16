const planets = require('../data/planets.json');
const response = require('../utils/response');

const getPlanets = (_, res) =>
	response(res, 200, planets, 'The response was satisfactory');

module.exports = getPlanets;
