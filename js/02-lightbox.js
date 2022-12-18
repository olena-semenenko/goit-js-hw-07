import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', showImage);

function createMarkup(array) {
  const markup = array.reduce((acc, item) => {
    const { preview, original, description } = item;
    acc += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    return acc;
  }, '');

  gallery.insertAdjacentHTML('beforeend', markup);
}
createMarkup(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

function showImage(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const title = event.target.alt;
    lightbox.defaultOptions.captionType = 'text';
    lightbox.defaultOptions.captionClass = `${title}`;
    lightbox.defaultOptions.captionDelay = 250;
  }
}
