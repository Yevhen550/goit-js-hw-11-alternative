const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44148621-e60a5c983575e679a6a81416c';

export async function fetchImage() {
  const resolve = await fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`
  );
  return await resolve.json();
}
