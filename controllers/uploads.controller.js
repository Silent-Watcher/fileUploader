'use strict';

const uploadFile = async (req, res, next) => {
	try {
		let path = req.file.path;
		let result = await imageModel.create({ path });
		res.status(302).redirect('/');
	} catch (error) {
		next(error);
	}
};

module.exports = uploadFile