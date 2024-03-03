import { useSelector, useDispatch } from 'react-redux';

import { selectAuthUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import css from './navBarUser.module.css';

const NavBarUser = () => {
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome, {name}</p>
      <button className={css.logoutBtn} onClick={onLogout} type="button">
        Log Out
      </button>
    </div>
  );
};

export default NavBarUser;
