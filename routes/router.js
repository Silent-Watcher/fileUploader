'use strict';

const { Router } = require('express');
const imageModel = require('../models/image.model');
const fileUploader = require('../middlewares/fileUploader.middleware');

const router = Router();

router.get('/', async (req, res) => {
	let images = await imageModel.find({});
	res.status(200).render('index', { images });
});

router.post(
	'/uploads',
	fileUploader.single('image'),
	async (req, res, next) => {
		try {
			let path = req.file.path;
			let result = await imageModel.create({ path });
			res.status(302).redirect('/');
		} catch (error) {
			next(error);
		}
	},
);

module.exports = router;
