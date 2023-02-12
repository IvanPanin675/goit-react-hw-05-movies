import { NavLink } from 'react-router-dom';

import css from './popularMovie.module.css';

const PopularMovie = ({ items }) => {
  const element = items.map(({ id, title }) => (
    <NavLink className={css.linkMovie} key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </NavLink>
  ));

  return <ul>{element}</ul>;
};

export default PopularMovie;
