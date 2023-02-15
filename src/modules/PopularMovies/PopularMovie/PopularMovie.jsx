import { NavLink, useLocation } from 'react-router-dom';

import css from './popularMovie.module.css';

const PopularMovie = ({ items }) => {
  const location = useLocation();

  const element = items.map(({ id, title }) => (
    <NavLink className={css.linkMovie} key={id} to={`/movies/${id}`} state={{from: location}}>
      <li>{title}</li>
    </NavLink>
  ));

  return <ul>{element}</ul>;
};

export default PopularMovie;