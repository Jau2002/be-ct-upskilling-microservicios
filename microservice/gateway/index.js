const express = require('express');
const morganBody = require('morgan-body');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const morganBodyOptions = {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
};

morganBody(app, morganBodyOptions);

app.use(
	'/films',
	createProxyMiddleware({
		target: 'http://films:3001',
		changeOrigin: true,
	})
);

app.use(
	'/characters',
	createProxyMiddleware({
		target: 'http://characters:8008',
		changeOrigin: true,
	})
);

app.use(
	'/planets',
	createProxyMiddleware({
		target: 'http://planets:8000',
		changeOrigin: true,
	})
);

app.listen(3000, () => console.log('Gateway listening on port 3000'));
