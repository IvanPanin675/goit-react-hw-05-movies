import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=bf112b0bdd94b872432eacde842e62d8

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'bf112b0bdd94b872432eacde842e62d8',
    language: 'en-US',
  },
});

export const searchMovies = async query => {
  console.log(query)
  const { data } = await instans.get('search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMostPopular = async () => {
  const { data } = await instans.get('movie/popular');
  return data;
};

export const getIdMovie = async id => {
  const { data } = await instans.get(`movie/${id}`);
  return data;
};

export const getCredits = async id => {
  const { data } = await instans.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await instans.get(`/movie/${id}/reviews`);
  return data;
};
