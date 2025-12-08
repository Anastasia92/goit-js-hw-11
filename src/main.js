import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';
import { refs } from './js/refs.js';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = e.target.elements['search-text'].value.trim();

  if (!inputValue) return;
  clearGallery();
  showLoader();
  getImagesByQuery(inputValue)
    .then(images => createGallery(images))
    .finally(hideLoader);
});
