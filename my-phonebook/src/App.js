import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: [],
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  onFilter = (word) => {
    this.setState(() => ({ filter: word.toUpperCase() }));
  };

  render() {
    const {
      state: { contacts, filter },
      onChangeState,
      onFilter,
    } = this;

    console.log(filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        <h2>Contacts</h2>
        <Filter onFilter={onFilter} />
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}

export default App;
