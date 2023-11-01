'use strict';

const { Router } = require('express');
const imageModel = require('../models/image.model');

const imageRouter = Router();

imageRouter.delete('/:id', async (req, res, next) => {
	let { id } = req.params;
	let result = await imageModel.findByIdAndDelete(id);
	if (result)
		return res.status(200).send({
			code: res.statusCode,
			user: {
				...result,
			},
		});
	throw new Error('invalid image id :)');
});

module.exports = imageRouter;
