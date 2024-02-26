import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  Form,
  Label,
  FormInput,
  Button,
  InputWrap,
} from './ContactForm.styled';
import { toast } from 'react-toastify';

import { selectItems } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const formNameId = nanoid();
const fornNumberId = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const phone = form.number.value;

    const isExist = contacts
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    if (isExist) {
      return toast.warning(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap>
        <Label htmlFor={formNameId}>Name</Label>
        <FormInput
          id={formNameId}
          type="text"
          name="name"
          autoComplete="off"
          required
        />
      </InputWrap>
      <InputWrap>
        <Label htmlFor={fornNumberId}>Number</Label>
        <FormInput
          id={fornNumberId}
          type="tel"
          name="number"
          autoComplete="off"
          required
        />
      </InputWrap>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
