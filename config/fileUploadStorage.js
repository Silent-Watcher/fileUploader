'use strict';
const multer = require('multer');
const { join, extname } = require('path');
const { mkdirSync, existsSync } = require('fs');

// new Date().getFullYear().toString(),
// new Date().getMonth().toString(),
// new Date().getDay().toString(),

const fileUploadStorage = multer.diskStorage({
	filename: (req, file, cb) => {
		const whiteListMimeType = [
			'image/png',
			'image/jpg',
			'image/jpeg',
			'image/webp',
		];
		if (whiteListMimeType.includes(file.mimetype)) {
			let fileExt = extname(file.originalname);
			let fileName = Date.now().toString() + fileExt;
			cb(null, fileName);
		} else
			cb(
				new Error(
					`invalid image extension, following mimeTypes are accepted \n ${whiteListMimeType.join(
						', ',
					)}`,
				),
			);
	},
	destination: (req, file, cb) => {
		const BASE_FILE_UPLOAD_PATH = join(
			__dirname,
			'..',
			'public',
			'uploads',
		);
		if (!existsSync(BASE_FILE_UPLOAD_PATH)) {
			mkdirSync(BASE_FILE_UPLOAD_PATH);
			console.log('path not exists!');
		}
		cb(null, BASE_FILE_UPLOAD_PATH);
	},
});

module.exports = fileUploadStorage;
