'use strict';

const notFoundError = (req, res, next) => {
	return res.status(404).render('404');
};

module.exports = notFoundError;
