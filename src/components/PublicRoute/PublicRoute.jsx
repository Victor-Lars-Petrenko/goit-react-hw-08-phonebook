import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import {
  selectAuthIsLogin,
  selectToken,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
