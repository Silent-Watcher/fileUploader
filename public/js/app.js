'use strict';

const input = document.querySelector('#dropzone-file');
const closePreviewButton = document.querySelector('.closeBtn');
const removeImgButtons = document.querySelectorAll('.removeImgBtn');

input.addEventListener('change', (event) => {
	if (event.target.files.length > 0) {
		let img = event.target.files[0];
		showPreview(img);
	} else removePreview();
});

function showPreview(img) {
	``;
	const previewImg = document.querySelector('#preview__img');
	const previewTitle = document.querySelector('#preview__img-title');
	previewImg.src = URL.createObjectURL(img);
	previewImg.parentElement.classList.replace('hidden', 'flex');
	previewTitle.innerHTML = img.name;
}

function removePreview() {
	const previewImg = document.querySelector('#preview__img');
	previewImg.parentElement.classList.replace('flex', 'hidden');
}

window.addEventListener('load', () => {
	closePreviewButton.addEventListener('click', (event) => {
		showConfirmDeletionModal(event, closePreview);
	});
	removeImgButtons.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			showConfirmDeletionModal(event, removeImage);
		});
	});
});

function showConfirmDeletionModal(event, cb) {
	Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#68a063',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!',
	}).then((result) => {
		if (result.isConfirmed) {
			cb(event);
		}
	});
}

function closePreview(event) {
	input.value = null;
	event.target.parentElement.classList.replace('flex', 'hidden');
	Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
}

async function removeImage(event) {
	let imageId = event.target.nextElementSibling.id;
	let result = await fetch(`/images/${imageId}`, {
		method: 'DELETE',
	});
	result = await result.json()
	if (result) {
		event.target.parentElement.remove();
		Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
	}
	
}
