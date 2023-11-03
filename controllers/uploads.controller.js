'use strict';

const imageModel = require('../models/image.model');
const isImageValid = require('../validation/image.validator');
const upload = require('../utils/processImage.util');

const uploadFile = async (req, res, next) => {
	try {
		let { file: image } = req;
		isImageValid(image);
		let uploadedPath = await upload(image);
		await imageModel.create({ path: uploadedPath });
		res.status(302).redirect('/');
	} catch (error) {
		next(error);
	}
};

module.exports = uploadFile;
