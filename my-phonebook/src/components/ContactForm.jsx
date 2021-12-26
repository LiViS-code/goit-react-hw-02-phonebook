import React, { Component } from "react";
import { nanoid } from "nanoid";
import { FormContacts, Label, Input, Button } from "./ContactForm.styled";

const INITIAL_VALUE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_VALUE };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onChangeState } = this.props;
    if (this.matchCheck(name, contacts)) return this.alertMsg(name);
    contacts.push({ id: nanoid(), name: name, number: number });
    this.setState(() => ({ number: number }));
    onChangeState(contacts);
    this.reset();
  };

  matchCheck = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  alertMsg = (name) => {
    alert(`${name} is alredy in contacts`);
  };

  reset = () => {
    this.setState(() => ({ ...INITIAL_VALUE }));
  };

  render() {
    const {
      handleInput,
      handleSubmit,
      state: { name, number },
    } = this;

    return (
      <>
        <FormContacts onSubmit={handleSubmit}>
          <Label htmlFor="inputName">Name</Label>

          <Input
            id="inputName"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter contact name"
            required
            onChange={handleInput}
          />

          <Label htmlFor="inputNumber">Number</Label>

          <Input
            id="inputNumber"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
            onChange={handleInput}
          />

          <Button type="submit" disabled={!name || !number}>
            Add contact
          </Button>
        </FormContacts>
      </>
    );
  }
}

export default ContactForm;
