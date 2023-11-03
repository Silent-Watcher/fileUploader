'use strict';

const { mkdirSync } = require('fs');
const sha1 = require('sha1');

const upload = async (image) => {
	const sharp = require('sharp');
	const { join } = require('path');
	const BASE_FILE_UPLOAD_PATH = join(
		__dirname,
		'..',
		'public',
		'uploads',
		new Date().getFullYear().toString(),
		new Date().getMonth().toString(),
		new Date().getDay().toString(),
	);
	mkdirSync(BASE_FILE_UPLOAD_PATH, { recursive: true });
	let fileName = sha1(Date.now().toString() + image.originalname);
	let filePath = join(BASE_FILE_UPLOAD_PATH, `${fileName}.webp`);
	await sharp(image.buffer)
		.resize({ width: 827, height: 640 })
		.webp()
		.toFile(filePath);
	filePath = filePath.replace(
		'C:\\Users\\Home\\Desktop\\fileUploader\\public',
		'',
	);
	return filePath;
};

module.exports = upload;
