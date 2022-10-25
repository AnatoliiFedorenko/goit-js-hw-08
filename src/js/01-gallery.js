import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const gallery = galleryItems
  .map(
    image =>
      ` <li>     
            <a class="gallery__item" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}" width="250" height="230"/>
            </a>
        </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', gallery);

galleryContainer.addEventListener('click', bigPicture);

function bigPicture(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
