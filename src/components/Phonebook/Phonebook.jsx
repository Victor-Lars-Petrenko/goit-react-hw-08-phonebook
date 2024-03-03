import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { selectContacts } from '../../redux/contacts/contacts-selectors';
import { Bars } from 'react-loader-spinner';
import css from './Phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.commonWrapper}>
      <ContactForm />

      <Filter />
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Bars color="MidnightBlue" height="40" width="40" />
        </div>
      )}
      {error && (
        <h2 className={css.errorWrapper}>
          Sorry, an error occurred. Please, try again
        </h2>
      )}
      <ContactList />
    </div>
  );
};

export default Phonebook;
