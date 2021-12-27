import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Container, Title, ContactsTitle, Message } from "./App.styled";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  onFilter = (word) => {
    this.setState(() => ({ filter: word.toUpperCase() }));
  };

  onDelete = (id) => {
    const { contacts } = this.state;
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1);
        break;
      }
    }
    this.onChangeState(contacts);
  };

  render() {
    const {
      state: { contacts, filter },
      onChangeState,
      onFilter,
      onDelete,
    } = this;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        {contacts.length ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter onFilter={onFilter} />
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={onDelete}
            />
          </>
        ) : (
          <Message>You have no saved contacts</Message>
        )}
      </Container>
    );
  }
}

export default App;
