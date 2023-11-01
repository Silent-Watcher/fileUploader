'use strict';

const errorHandler = (err, req, res, next) => {
	return res.status(err.status || 500).json({
		code: res.statusCode,
		error: {
			message: err.message,
			...err,
		},
	});
};

module.exports = errorHandler;
