import React, { Component } from "react";
class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    let filterContacts = contacts;

    if (filter) {
      filterContacts = contacts.filter(({ name }) =>
        name.toUpperCase().includes(filter)
      );
    }

    return (
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{" "}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
