const express = require('express');
const morganBody = require('morgan-body');
const filmsRouter = require('./routes/films.route');

const app = express();

const { json } = express;

app.use(json());

const morganBodyOptions = {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
};

morganBody(app, morganBodyOptions);

app.use('/films', filmsRouter);

module.exports = app;
