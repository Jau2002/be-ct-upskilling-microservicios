const response = (res, statusCode, data, message) =>
	res.status(statusCode).json({
		error: false,
		message,
		data,
	});

module.exports = response;
