import { useSelector } from 'react-redux';

import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <List>
      {items.map(item => {
        return <ContactListItem key={item.id} item={item} />;
      })}
    </List>
  );
};
