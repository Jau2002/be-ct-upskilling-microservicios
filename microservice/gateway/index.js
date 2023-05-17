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
		target: 'http://localhost:3001',
		changeOrigin: true,
	})
);

app.use(
	'/characters',
	createProxyMiddleware({
		target: 'http://localhost:8008',
		changeOrigin: true,
	})
);

app.use(
	'/planets',
	createProxyMiddleware({
		target: 'http://localhost:8000',
		changeOrigin: true,
	})
);

app.listen(3000, () => console.log('Gateway listening on port 3000'));
