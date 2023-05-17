class CustomError extends Error {
	constructor(statusCode = 400, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

module.exports = CustomError;
