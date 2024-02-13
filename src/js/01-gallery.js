// Add imports above this line

import * as simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
import simpleLightbox from 'simplelightbox';

// Change code below this line

// create gallery markup
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  listItem.innerHTML = `
    <a class="gallary__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    `;

  gallery.appendChild(listItem);
});

//Even delegationn to open modal
gallery.addEventListener('click', eventx => {
  eventx.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;
    const instance = simpleLightbox.create(
      `<img src="${imageUrl}" alt="Image">`
    );
    instance.show();
  }
});
