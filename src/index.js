import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage } from './js/api';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const searchBtn = document.querySelector('[type=submit]');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();
  const inputValue = ev.currentTarget.searchQuery.value.trim();
  console.log(inputValue);
}

fetchImage().then(data => {
  const markup = data.hits;

  return markup.map(
    ({
      id,
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      gallery.innerHTML = `<div class="photo-card">
                            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                            <div class="info">
                             <p class="info-item"><b>Likes</b> ${likes}</p>
                             <p class="info-item"><b>Views</b> ${views}</p>                
                             <p class="info-item"><b>Comments</b> ${comments}</p>
                             <p class="info-item"><b>Downloads</b> ${downloads}</p>
                            </div> 
                        </div>`;
    }
  );
});
