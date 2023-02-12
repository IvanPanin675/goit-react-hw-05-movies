import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'modules/Loader/Loader';

import { searchMovies } from 'shared/services/api';
import PopularMovie from 'modules/PopularMovies/PopularMovie/PopularMovie';

const SearchMovies = () => {
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(query);
        setMovies([...data.results]);

      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query === '') {
      return;
    }
    fetchMovie();
  }, [query]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({query: search});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span></span>Search
        </button>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      {loading ? <Loader /> : <PopularMovie items={movies} />}
    </>
  );
};

export default SearchMovies;