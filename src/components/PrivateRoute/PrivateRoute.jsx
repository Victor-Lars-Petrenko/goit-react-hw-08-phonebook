import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import {
  selectAuthIsLogin,
  selectToken,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
