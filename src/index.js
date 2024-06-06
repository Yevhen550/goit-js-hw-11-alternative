import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage } from './js/api';
import { renderGallery } from './js/render-gallery';

let page = 1;
const perPage = 40;

const form = document.querySelector('.search-form');

const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onSubmit(ev) {
  ev.preventDefault();
  page = 1;
  const inputValue = ev.currentTarget.searchQuery.value.trim();
  console.log(inputValue);
  fetchImage(page).then(data => {
    const markup = data.hits;
    console.log(markup);
    return renderGallery(markup);
  });
}

function onLoadMoreBtn(ev) {
  console.log('click');
  fetchImage().then(data => {
    const markup = data.hits;
    console.log(markup);
    return renderGallery(markup);
  });
}
