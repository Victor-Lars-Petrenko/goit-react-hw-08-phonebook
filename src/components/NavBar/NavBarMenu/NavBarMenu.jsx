import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthIsLogin } from '../../../redux/auth/auth-selectors';
import menuItems from './menuItems';
import css from './navBarMenu.module.css';

const NavBarMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={css.navLink}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.navBarMenu}>{elements}</ul>;
};

export default NavBarMenu;
