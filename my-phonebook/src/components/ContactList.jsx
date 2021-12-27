import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FcDeleteDatabase } from "react-icons/fc";
import { ContastsList, ContactItem } from "./ContactList.styled";
import { Button } from "./ContactForm.styled";
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
      <ContastsList>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}{" "}
            <Button
              type="button"
              onClick={() => onDelete(id)}
              title="Delete this contact"
            >
              <IconContext.Provider
                value={{
                  size: "1.3em",
                  style: { verticalAlign: "middle" },
                }}
              >
                <FcDeleteDatabase />
              </IconContext.Provider>
            </Button>
          </ContactItem>
        ))}
      </ContastsList>
    );
  }
}

export default ContactList;
