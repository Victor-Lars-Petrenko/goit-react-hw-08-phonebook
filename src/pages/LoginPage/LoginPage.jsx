import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  // if (authError) {
  //   toast.error(authError);
  // }

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      {authLoading && !authError && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && toast.error(authError) && <></>}
    </div>
  );
};

export default LoginPage;
