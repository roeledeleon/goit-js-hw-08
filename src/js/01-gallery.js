// Add imports above this line

import SimpleLightbox from 'simplelightbox';

// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  listItem.innerHTML = `
      <a class="gallery__link" href="${item.original}">
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

const optionsModal = {
  captionsData: 'alt',
  captionDelay: 250,
};

// Event delegation to Open Modal
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.getAttribute('data-source');
    let gallery = new SimpleLightbox('.gallery a', optionsModal);
    gallery.on('show.simplelightbox', function () {
      // Do something…
    });
  }
});

console.log(galleryItems);
