import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import css from './ContactForm.module.css';
import { toast } from 'react-toastify';

import { selectContacts } from '../../../redux/contacts/contact-selectors';
import { addContact } from '../../../redux/contacts/contacts-operations';

const formNameId = nanoid();
const fornNumberId = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

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

    dispatch(addContact({ name, number }));
    form.reset();
  };

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
        Add contact
      </button>
    </form>
  );
};
