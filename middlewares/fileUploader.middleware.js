'use strict';
const multer = require('multer');
const fileUploadStorage = multer.memoryStorage();
const _3MB = 3e6;

const fileUploader = multer({
	storage: fileUploadStorage,
	limits: { fileSize: _3MB },
});

module.exports = fileUploader;
