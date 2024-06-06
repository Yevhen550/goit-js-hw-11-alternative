import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage } from './js/api';
import { renderGallery } from './js/render-gallery';

const form = document.querySelector('.search-form');

const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onSubmit(ev) {
  ev.preventDefault();
  const inputValue = ev.currentTarget.searchQuery.value.trim();
  console.log(inputValue);
}

fetchImage().then(data => {
  const markup = data.hits;
  console.log(markup);
  return renderGallery(markup);
});

function onLoadMoreBtn(ev) {
  console.log('click');
}
