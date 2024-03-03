import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import {
  selectContacts,
  selectIsLoading,
} from '../../../redux/contacts/contacts-selectors';
import { addContact } from '../../../redux/contacts/contacts-operations';
import { Bars } from 'react-loader-spinner';
import css from './ContactForm.module.css';
import { useEffect, useState } from 'react';

const formNameId = nanoid();
const fornNumberId = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const [IsSubmitted, SetIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;

    const isExist = items
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    if (isExist) {
      return toast.warning(`${name} is already in contacts.`);
    }

    SetIsSubmitted(true);
    dispatch(addContact({ name, number }));

    form.reset();
  };

  useEffect(() => {
    if (!loading) {
      SetIsSubmitted(false);
    }
  }, [loading]);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputWrap}>
        <label className={css.label} htmlFor={formNameId}>
          Name
        </label>
        <input
          className={css.formInput}
          id={formNameId}
          type="text"
          name="name"
          autoComplete="off"
          required
        />
      </div>
      <div className={css.inputWrap}>
        <label className={css.label} htmlFor={fornNumberId}>
          Number
        </label>
        <input
          className={css.formInput}
          id={fornNumberId}
          type="tel"
          name="number"
          autoComplete="off"
          required
        />
      </div>
      <button className={css.formButton} type="submit">
        {!IsSubmitted && 'Add contact'}
        {IsSubmitted && loading && (
          <div className={css.loaderWrapper}>
            <Bars visible={true} width="20" color="MidnightBlue" />
          </div>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
