'use strict';

const { Router } = require('express');

const imageRouter = Router();

imageRouter.delete('/:id', (req, res, next) => {
	let { id } = req.params;
	res.send();
});

module.exports = imageRouter;
