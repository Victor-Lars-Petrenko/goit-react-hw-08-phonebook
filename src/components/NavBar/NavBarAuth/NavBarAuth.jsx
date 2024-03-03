import { NavLink } from 'react-router-dom';

import css from './navBarAuth.module.css';

const NavBarAuth = () => {
  return (
    <div className={css.authWrapper}>
      <NavLink className={css.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
