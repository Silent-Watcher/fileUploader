'use strict';
const imageModel = require('../models/image.model');

const uploadFile = async (req, res, next) => {
	try {
		let path = req.file.path;
		path = path.replace(
			'C:\\Users\\Home\\Desktop\\fileUploader\\public',
			'',
		);
		let result = await imageModel.create({ path });
		res.status(302).redirect('/');
	} catch (error) {
		next(error);
	}
};

module.exports = uploadFile;
