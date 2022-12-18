import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', showImage);

function createMarkup(array) {
  const markup = array.reduce((acc, item) => {
    const { preview, original, description } = item;
    acc += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    return acc;
  }, '');

  gallery.insertAdjacentHTML('beforeend', markup);
}
createMarkup(galleryItems);

function showImage(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const url = event.target.dataset.source;
    console.log(url);
    const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`);
    instance.show();

    gallery.addEventListener('keydown', closeImage);
    function closeImage(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
}
