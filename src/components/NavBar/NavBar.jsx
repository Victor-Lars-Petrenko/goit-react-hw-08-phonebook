import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBarMenu from './NavBarMenu';
import NavBarAuth from './NavBarAuth';
import NavBarUser from './NavBarUser';

import { selectAuthIsLogin } from '../../redux/auth/auth-selectors';
import { FaRegAddressBook } from 'react-icons/fa6';
import css from './navBar.module.css';

const NavBar = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  return (
    <nav className={css.navbar}>
      <span className={css.navbarEl}>
        <Link to="/" className={css.logo}>
          <FaRegAddressBook />
        </Link>
      </span>
      <span className={css.navbarEl}>
        <NavBarMenu className={css.navBarMenu} />
      </span>
      <span className={css.navbarEl}>
        {isLogin ? (
          <NavBarUser className={css.navBarUser} />
        ) : (
          <NavBarAuth className={css.navBarAuth} />
        )}
      </span>
    </nav>
  );
};

export default NavBar;
