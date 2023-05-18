const express = require('express');
const morganBody = require('morgan-body');
require('dotenv').config();

const app = express();

const morganBodyOptions = {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
};

morganBody(app, morganBodyOptions);

app.use('*', (_, res) => res.status(404).send('Not Found'));

app.use((err, _req, res, _next) =>
	res.status(err.statusCode || 500).json({ error: true, message: err.message })
);

module.exports = app;
