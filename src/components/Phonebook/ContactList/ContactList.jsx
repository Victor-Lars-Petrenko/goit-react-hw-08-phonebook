import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem';
import { selectFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {items.map(item => {
        return <ContactListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ContactList;
