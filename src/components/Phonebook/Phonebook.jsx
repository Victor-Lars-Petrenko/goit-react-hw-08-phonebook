import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  selectIsLoading,
  selectError,
} from '../../redux/contacts/contacts-selectors';
import { Bars } from 'react-loader-spinner';
import css from './Phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading } = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    setIsMounted(true);
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) setIsMounted(false);
  }, [isLoading]);

  return (
    <div className={css.commonWrapper}>
      <ContactForm />

      <Filter />
      {isMounted && isLoading && !error && (
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
