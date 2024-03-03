import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';
import { selectFilteredContacts } from '../../../redux/contacts/contact-selectors';

export const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {items.map(item => {
        return <ContactListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
