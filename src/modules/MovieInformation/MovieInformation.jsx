import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getIdMovie } from 'shared/services/api';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'modules/Loader/Loader';

import css from './movieInformation.module.css';

export const MovieInformation = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        const data = await getIdMovie(id);
        setMovie(data);
        setGenres(data.genres);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieId();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);

  return (
    <>
      <button onClick={goBack}>GO BACK</button>
      {loading && <Loader />}

      <div className={css.afisha}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className={css.movieImg}
            alt=""
          ></img>
        )}
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.menu}>
        <NavLink className={css.link} to="cast" state={{from}}>
          Cast
        </NavLink>
        <NavLink className={css.link} to="reviews" state={{from}}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
