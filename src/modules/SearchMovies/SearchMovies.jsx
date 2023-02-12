import { useState, useEffect } from 'react';

import Loader from 'modules/Loader/Loader';
import PopularMovie from './PopularMovie/PopularMovie';
import { searchMovies } from 'shared/services/api';

const SearchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovies();
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return <>{loading ? <Loader /> : <PopularMovie items={movies} />}</>;
};

export default SearchMovies;