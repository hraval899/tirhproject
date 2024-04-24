const previewImages = document.querySelectorAll('.preview');
const imageContainer = document.getElementById('image');

function upDate(previewPic) {
	console.log("upDate function triggered");
	console.log(previewPic.alt, previewPic.src);

	const imgSrc = previewPic.getAttribute('data-image');
	const imgText = previewPic.getAttribute('data-text');

	imageContainer.style.backgroundImage = `url(${imgSrc})`;
	imageContainer.getElementsByTagName('h2')[0].innerText = imgText;
}

function undo() {
	console.log("undo function triggered");
	imageContainer.style.backgroundImage = 'none';
	imageContainer.getElementsByTagName('h2')[0].innerText = 'Hover over an image below to display here.';
}

previewImages.forEach(img => {
	img.addEventListener('mouseover', () => upDate(img));
	img.addEventListener('mouseout', () => undo());
});