'use strict';

const handleIndex = async (req, res) => {
	let images = await imageModel.find({});
	res.status(200).render('index', { images });
};

module.exports = handleIndex;