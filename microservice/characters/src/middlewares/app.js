const express = require('express');
const morganBody = require('morgan-body');
const characterRouter = require('../routes/characters.route');

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

app.use((err, _req, res, _next) =>
	res.status(err.statusCode || 500).json({ error: true, message: err.message })
);

module.exports = app;
