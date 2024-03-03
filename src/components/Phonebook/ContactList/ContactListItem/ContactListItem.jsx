import { useDispatch } from 'react-redux';

import css from './ContactListItem.module.css';
import { deleteContact } from '../../../../redux/contacts/contacts-operations';

export const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
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
        Delete
      </button>
    </li>
  );
};
