const express = require('express');
const morganBody = require('morgan-body');
const planetsRouter = require('./routes/films.route');

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

app.use('/planets', planetsRouter);

module.exports = app;
