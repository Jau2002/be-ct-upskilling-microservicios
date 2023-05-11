const planets = require('../data/planets.json');

const getPlanets = (_, res) => {
	return res.status(200).json(planets);
};

module.exports = getPlanets;
