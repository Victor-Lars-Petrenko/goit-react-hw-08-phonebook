import { useSelector, useDispatch } from 'react-redux';

import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  console.log(authError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      {authLoading && <Loader />}
      <SignUpForm onSubmit={handleSignup} />
      {authError && toast.error(authError) && <></>}
    </div>
  );
};

export default SignUpPage;
