const express = require('express');
const morganBody = require('morgan-body');
const characterRouter = require('./routes/characters.route');

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

app.use('/characters', characterRouter);

app.use('*', (_, res) => res.status(404).send('Not Found'));

module.exports = app;
