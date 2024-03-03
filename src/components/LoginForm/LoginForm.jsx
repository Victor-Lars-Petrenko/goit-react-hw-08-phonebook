import { useState, useId } from 'react';

import css from './LoginForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={css.loginForm}>
      <div className={css.loginInputWrap}>
        <label className={css.loginLabel} htmlFor={emailId}>
          Email:
        </label>
        <input
          className={css.loginFormInput}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className={css.loginInputWrap}>
        <label className={css.loginLabel} htmlFor={passwordId}>
          Password:
        </label>
        <input
          className={css.loginFormInput}
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <button className={css.loginFormButton} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
