'use strict';
const $$ = document;
const input = $$.querySelector('#dropzone-file');

input.addEventListener('change', (event) => {
	if (event.target.files.length > 0) {
		let img = event.target.files[0];
		showPreview(img);
	} else removePreview();
});

function showPreview(img) {
	const previewImg = $$.querySelector('#preview__img');
	const previewTitle = $$.querySelector('#preview__img-title');
	previewImg.src = URL.createObjectURL(img);
	previewImg.parentElement.classList.replace('hidden', 'flex');
	previewTitle.innerHTML = img.name;
}

function removePreview() {
	const previewImg = $$.querySelector('#preview__img');
	previewImg.parentElement.classList.replace('flex', 'hidden');
}
