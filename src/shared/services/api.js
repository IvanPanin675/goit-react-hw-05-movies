import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=bf112b0bdd94b872432eacde842e62d8

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
      api_key: 'bf112b0bdd94b872432eacde842e62d8',
      language: 'en-US',
  },
});

export const searchMovies = async (query) => {
  const { data } = await instans.get('/', {
    params: {
      query,
    },
  });
  console.log(data);
  return data;
};

export const getMostPopular = async () => {
  const { data } = await instans.get('movie/popular');

  return data;
};

export const getIdMovie = async (id) => {
  const { data } = await instans.get(`movie/${id}`);
  console.log('po ID - ', data)
  return data;
};

export const getIdMovieImage = async (id) => {
  const { data } = await instans.get(`movie/${id}/images`);
  console.log('po ID - ', data)
  return data;
};