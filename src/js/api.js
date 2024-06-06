const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44148621-e60a5c983575e679a6a81416c';

export async function fetchImage(query, page, perPage) {
  const resolve = await fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return await resolve.json();
}
