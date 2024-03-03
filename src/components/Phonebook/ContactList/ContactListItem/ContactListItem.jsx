import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { deleteContact } from '../../../../redux/contacts/contacts-operations';
import { selectIsLoading } from '../../../../redux/contacts/contacts-selectors';
import { Bars } from 'react-loader-spinner';
import css from './ContactListItem.module.css';

const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const [clicked, SetClicked] = useState(false);

  const handleClick = () => {
    dispatch(deleteContact(id));
    SetClicked(true);
  };

  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.button}
        id={id}
        type="button"
        onClick={handleClick}
      >
        {!clicked && 'Delete'}
        {clicked && loading && (
          <div className={css.loaderWrapper}>
            <Bars visible={true} width="20" color="MidnightBlue" />
          </div>
        )}
      </button>
    </li>
  );
};

export default ContactListItem;
