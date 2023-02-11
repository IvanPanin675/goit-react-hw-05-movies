import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=bf112b0bdd94b872432eacde842e62d8

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    key: 'bf112b0bdd94b872432eacde842e62d8',
  },
});

export const searchMovies = async (query, page = 1) => {
  const { data } = await instans.get('/', {
    params: {
      query,
      page,
    },
  });
  console.log(data);
  return data;
};

export const getMostPopular = async () => {
  const { data } = await instans.get('movie/popular');
  console.log(
    'Повертаємо data з запиту по самим популярним фільмам',
    data.results
  );
  return data;
};
