'use strict';

const isImageValid = (file) => {
	const whiteListMimeType = [
		'image/png',
		'image/jpg',
		'image/jpeg',
		'image/webp',
	];
	if (!whiteListMimeType.includes(file.mimetype))
		throw new Error(
			`invalid image extension, following mimeTypes are accepted \n ${whiteListMimeType.join(
				', ',
			)}`,
		);
};

module.exports = isImageValid;
