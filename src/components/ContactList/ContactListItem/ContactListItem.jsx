import { useDispatch } from 'react-redux';

import { Item, Button } from './ContactListItem.styled';
import { deleteContact } from '../../../redux/operations';

export const ContactListItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <Button id={id} type="button" onClick={handleClick}>
        Delete
      </Button>
    </Item>
  );
};
