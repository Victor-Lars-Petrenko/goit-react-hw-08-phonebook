import { useState, useId } from 'react';

import css from './SignUpForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;
  return (
    <form className={css.signForm} onSubmit={handleSubmit}>
      <div className={css.signInputWrap}>
        <label className={css.signLabel} htmlFor={nameId}>
          Name:
        </label>
        <input
          className={css.signFormInput}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={nameId}
          required
        />
      </div>
      <div className={css.signInputWrap}>
        <label className={css.signLabel} htmlFor={emailId}>
          Email:
        </label>
        <input
          className={css.signFormInput}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className={css.signInputWrap}>
        <label className={css.signLabel} htmlFor={passwordId}>
          Password:
        </label>
        <input
          className={css.signFormInput}
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <button className={css.signFormButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
