export function apiPixabay(searchWord) {
  const API_KEY = '43459194-a58fa84b79e2fe067af435c08';
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
