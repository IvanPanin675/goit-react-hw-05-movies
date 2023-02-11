import { NavLink } from 'react-router-dom';
import styled from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styled.menu}>
      <NavLink className={styled.link} to="/">Home</NavLink>
      <NavLink className={styled.link} to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Navbar;